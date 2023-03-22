import React from 'react'
import { useTranslation } from 'react-i18next'
import {Text, View} from 'react-native'
import { Header } from '../components/PageHeader'

export const Phone = () => {
  const { t } = useTranslation()
  
  return (
    <View>
      <Header title={t('Phone.Title')} />
      <View style={{ padding: 10 }}>
      <Text>Phone</Text>
      </View>
    </View>
  )
}
