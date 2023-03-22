import React from 'react'
import { useTranslation } from 'react-i18next'
import {Text, View} from 'react-native'
import { Header } from '../components/PageHeader'

export const TransferWalletApp = () => {
  const { t } = useTranslation()
  
  return (
    <View>
      <Header title={t('TransferWalletApp.Title')} />
      <View style={{ padding: 10 }}>
      <Text>TransferWallet</Text>
      </View>
    </View>
  )
}
