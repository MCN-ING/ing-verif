import React from 'react'
import { useTranslation } from 'react-i18next'
import {Text, View} from 'react-native'
import LanguageSelector from '../components/LanguageSelector'
import { Header } from '../components/PageHeader'

export const UserManual = () => {
  const { t } = useTranslation()
  
  return (
    <View>
      <Header title={t('UserManual.Title')} />
      <View style={{ padding: 10 }}>
      <Text>UserManual</Text>
      </View>
    </View>
  )
}
