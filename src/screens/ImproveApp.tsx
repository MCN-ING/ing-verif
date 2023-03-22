import React from 'react'
import { useTranslation } from 'react-i18next'
import {Text, View} from 'react-native'
import { Header } from '../components/PageHeader'

export const ImproveApp = () => {
  const { t } = useTranslation()
  
  return (
    <View>
      <Header title={t('ImproveApp.Title')} />
      <View style={{ padding: 10 }}>
      <Text>ImproveApp</Text>
      </View>
    </View>
  )
}
