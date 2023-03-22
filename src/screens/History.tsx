import React from 'react'
import { useTranslation } from 'react-i18next'
import {View} from 'react-native'
import HistorySelector from '../components/HistorySelector'
import { Header } from '../components/PageHeader'

export const History = () => {
  const { t } = useTranslation()
  
  return (
    <View>
      <Header title={t('History.Title')} />
      <View style={{ padding: 10 }}>
      <HistorySelector />
      </View>
    </View>
  )
}
