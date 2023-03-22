import React from 'react'
import { useTranslation } from 'react-i18next'
import {View} from 'react-native'
import LanguageSelector from '../components/LanguageSelector'
import { Header } from '../components/PageHeader'

export const DisplayLanguage = () => {
  const { t } = useTranslation()
  
  return (
    <View>
      <Header title={t('DisplayLanguage.Title')} />
      <View style={{ padding: 10 }}>
      <LanguageSelector />
      </View>
    </View>
  )
}
