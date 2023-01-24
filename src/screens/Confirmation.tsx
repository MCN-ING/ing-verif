import React from 'react'
import {useTranslation} from 'react-i18next'
import {View, Text} from 'react-native'

export const Confirmation = () => {
  const {t} = useTranslation()
  return (
    <View>
      <Text>{t('welcome')} to Confirmation</Text>
    </View>
  )
}
