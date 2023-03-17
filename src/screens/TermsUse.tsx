import React from 'react'
import { useTranslation } from 'react-i18next'
import {Text, View} from 'react-native'
import { Header } from '../components/PageHeader'

export const TermsUse = () => {
  const { t } = useTranslation()
  
  return (
    <View>
      <Header title={t('TermsUse.Title')} />
      <View style={{ padding: 10 }}>
      <Text>TermsUse</Text>
      </View>
    </View>
  )
}
