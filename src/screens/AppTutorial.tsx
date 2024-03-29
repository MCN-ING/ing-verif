import React from 'react'
import { useTranslation } from 'react-i18next'
import {Text, View} from 'react-native'
import { Header } from '../components/PageHeader'

export const AppTutorial = () => {
  const { t } = useTranslation()
  
  return (
    <View>
      <Header title={t('AppTutorial.Title')} />
      <View style={{ padding: 10 }}>
      <Text>AppTutorial</Text>
      </View>
    </View>
  )
}
