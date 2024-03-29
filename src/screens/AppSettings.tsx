import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView, View } from 'react-native'

import { Header } from '../components/PageHeader'
import { AppSettingItem } from '../components/AppSettingItem'
import { AppSetting } from '../contexts/types'
import { AppSettingList } from '../assets/AppSettingList'

export const AppSettings = () => {
  const { t } = useTranslation()
  const { navigate } = useNavigation()
  const appSettings = AppSettingList(t)

  function handleSelection(item: AppSetting) {
    navigate(item.route as never)
  }

  return (
    <View>
      <Header title={t('AppSettingsList.Title')} />
      <ScrollView style={{ padding: 10 }}>
        {appSettings.map((item: AppSetting) => {
          return <AppSettingItem key={item.id} item={item} action={() => handleSelection(item)} />
        })}
      </ScrollView>
    </View>
  )
}
