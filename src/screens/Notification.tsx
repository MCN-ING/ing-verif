import React from 'react'
import { useTranslation } from 'react-i18next'
import {Text, View} from 'react-native'
import { Header } from '../components/PageHeader'

export const Notification = () => {
  const { t } = useTranslation()
  
  return (
    <View>
      <Header title={t('Notification.Title')} />
      <View style={{ padding: 10 }}>
      <Text>Notification</Text>
      </View>
    </View>
  )
}
