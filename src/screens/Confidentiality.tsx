import React from 'react'
import { useTranslation } from 'react-i18next'
import {Text, View} from 'react-native'
import { Header } from '../components/PageHeader'

export const Confidentiality = () => {
  const { t } = useTranslation()
  
  return (
    <View>
      <Header title={t('Confidentiality.Title')} />
      <View style={{ padding: 10 }}>
      <Text>Confidentiality</Text>
      </View>
    </View>
  )
}
