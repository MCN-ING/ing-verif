import React from 'react'
import { useTranslation } from 'react-i18next'
import {Text, View} from 'react-native'
import { Header } from '../components/PageHeader'

export const ReportProblem = () => {
  const { t } = useTranslation()
  
  return (
    <View>
      <Header title={t('ReportProblem.Title')} />
      <View style={{ padding: 10 }}>
      <Text>ReportProblem</Text>
      </View>
    </View>
  )
}
