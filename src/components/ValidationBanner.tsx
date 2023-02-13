import React from 'react'
import {useTranslation} from 'react-i18next'
import {StyleSheet, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import {useTheme} from '../contexts/theme'
import DefaultComponentsThemes from '../defaultComponentsThemes'

interface Props {
  isVerified: boolean | undefined
}

export const ValidationBanner = ({isVerified}: Props) => {
  const {ColorPallet} = useTheme()
  const defaultTheme = DefaultComponentsThemes()
  const {t} = useTranslation()

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      borderRadius: 5,
      borderColor: ColorPallet.lightGray,
      borderWidth: 1,
      borderStyle: 'solid',
    },

    leftSection: {
      height: '100%',
      flex: 1,
      paddingVertical: 20,
      alignItems: 'center',
      backgroundColor: isVerified ? ColorPallet.success : ColorPallet.warning,
    },
    rightSection: {
      height: '100%',
      flex: 5,
      paddingVertical: 20,
      padding: 10,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  })

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Icon name={isVerified ? 'checkcircle' : 'warning'} size={25} color={ColorPallet.white} />
      </View>
      <View style={styles.rightSection}>
        <Text style={[defaultTheme.text, {fontWeight: 'bold'}]}>
          {isVerified ? t('ValidationBanner.SuccessTitle') : t('ValidationBanner.ErrorTitle')}
        </Text>
        <Text style={defaultTheme.text}>
          {isVerified ? t('ValidationBanner.SuccessBody') : t('ValidationBanner.ErrorBody')}
        </Text>
      </View>
    </View>
  )
}
