import React from 'react'
import { useTranslation } from 'react-i18next'
import {Text, View} from 'react-native'
import { Header } from '../components/PageHeader'

export const Accessibility = () => {
  const { t } = useTranslation()
  
  return (
    <View>
      <Header title={t('Accessibility.Title')} />
      <View style={{ padding: 10 }}>
      <Text>Accessibility</Text>
      </View>
    </View>
  )
}
