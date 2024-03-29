import React from 'react'
import { useTranslation } from 'react-i18next'
import {Text, View} from 'react-native'
import { Header } from '../components/PageHeader'

export const ByEmail = () => {
  const { t } = useTranslation()
  
  return (
    <View>
      <Header title={t('ByEmail.Title')} />
      <View style={{ padding: 10 }}>
      <Text>ByEmail</Text>
      </View>
    </View>
  )
}
