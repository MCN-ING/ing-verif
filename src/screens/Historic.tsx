import React from 'react'
import { useTranslation } from 'react-i18next'
import {View} from 'react-native'
import HistoricSelector from '../components/HistoricSelector'
import { Header } from '../components/PageHeader'

export const Historic = () => {
  const { t } = useTranslation()
  
  return (
    <View>
      <Header title={t('Historic.Title')} />
      <View style={{ padding: 10 }}>
      <HistoricSelector />
      </View>
    </View>
  )
}
