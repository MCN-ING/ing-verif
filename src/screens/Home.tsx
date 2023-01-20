import React from 'react'
import {useTranslation} from 'react-i18next'
import {View, Text} from 'react-native'

export const Home = () => {
  const {t} = useTranslation()
  return (
    <View>
      <Text>{t('welcome')}</Text>
    </View>
  )
}
