import {t} from 'i18next'
import React from 'react'
import {KeyboardAvoidingView, Platform, StyleSheet, View, ViewStyle} from 'react-native'
import {SelectList} from 'react-native-dropdown-select-list'

import {useTheme} from '../contexts/theme'
import {lightAttributeDetails} from '../contexts/types'

import {InputPredicate} from './ManageRequests/InputPredicate'

interface Item {
  label: string
  value: string
}

type Props = {
  setSelectedValue: (value: string) => void
  setPredicateValue: (value: number) => void
  data: Item[]
  current: lightAttributeDetails
  containerStyles?: ViewStyle
}

export const DopdownMenu = ({setSelectedValue, setPredicateValue, data, current, containerStyles}: Props) => {
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
      ...containerStyles,
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

  const defaultOption = (): {key: string; value: string} | undefined => {
    if (current.title.length > 0) {
      return {key: current.raw_name, value: current.title}
    }
    return undefined
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View>
        <SelectList
          boxStyles={styles.container}
          setSelected={(val: string) => setSelectedValue(val)}
          data={data}
          search={false}
          save="key"
          defaultOption={defaultOption()}
          placeholder={t('Dropdown.Select')}
        />
        <InputPredicate current={current} setPredicate={setPredicateValue} />
      </View>
    </KeyboardAvoidingView>
  )
}
