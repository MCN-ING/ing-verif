import React, {useState, useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import {ScrollView, View} from 'react-native'

import {LargeButton} from '../components/LargeButton'
import {Header} from '../components/PageHeader'
import {RequestItem} from '../components/RequestItem'
import {useStore} from '../contexts/store'
import {Request} from '../contexts/types'

export const ManageRequests = () => {
  const [state] = useStore()
  const {t} = useTranslation()

  return (
    <View style={{flex: 1}}>
      <Header title={t('ManageRequests.Title')} />
      <ScrollView style={{paddingHorizontal: 10, paddingBottom: 10}}>
        {state.requests.map((item: Request, index: number) => {
          return <RequestItem key={index.toString()} item={item} isManaged />
        })}
      </ScrollView>
      <View style={{marginBottom: 5}}>
        <LargeButton isPrimary title={t('ManageRequests.AddButtonText')} action={() => null} />
      </View>
    </View>
  )
}
