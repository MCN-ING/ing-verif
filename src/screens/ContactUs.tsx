import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView, View } from 'react-native'

import { Header } from '../components/PageHeader'
import { AppSettingItem } from '../components/AppSettingItem'
import { AppSetting } from '../contexts/types'
import { ContactUsList } from '../assets/ContactUsList'

export const ContactUs = () => {
  const { t } = useTranslation()
  const { navigate } = useNavigation()
  const contactUs = ContactUsList(t)

  function handleSelection(item: AppSetting) {
   
    navigate(item.route as never)
  }
  return (
    <View>
      <Header title={t('ContactUsList.Title')} />
      <ScrollView style={{ padding: 10 }}>
        {contactUs.map((item: AppSetting, index: number) => {
          return <AppSettingItem key={index.toString()} item={item} action={() => handleSelection(item)} />
        })}
      </ScrollView>
    </View>
  )
}
