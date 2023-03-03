import {t} from 'i18next'
import React from 'react'
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native'
import {SelectList} from 'react-native-dropdown-select-list'

import {useTheme} from '../contexts/theme'

interface Item {
  label: string
  value: string
}

type Props = {
  setSelectedValue: (value: string) => void
  data: Item[]
}

export const DopdownMenu = ({setSelectedValue, data}: Props) => {
  const {ColorPallet} = useTheme()
  const styles = StyleSheet.create({
    container: {
      minHeight: 50,
      marginVertical: 10,
      borderWidth: 2,
      borderColor: ColorPallet.lightGray,
      borderRadius: 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonStyle: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent',
    },
    text: {
      textAlign: 'left',
    },
    dropdownStyle: {
      borderColor: ColorPallet.lightGray,
      borderBottomWidth: 2,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderStyle: 'solid',
      borderBottomLeftRadius: 4,
      maring: '0',
      borderBottomRightRadius: 4,
    },
  })
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SelectList
        boxStyles={styles.container}
        setSelected={(val: string) => setSelectedValue(val)}
        data={data}
        search={false}
        save="key"
        placeholder={t('Dropdown.Select')}
      />
    </KeyboardAvoidingView>
  )
}
