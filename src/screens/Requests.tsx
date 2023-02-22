import React from 'react'
import {useTranslation} from 'react-i18next'
import {ScrollView, View} from 'react-native'

import {Header} from '../components/PageHeader'
import {RequestItem} from '../components/RequestItem'
import {useStore} from '../contexts/store'
import {Request} from '../contexts/types'

export const Requests = () => {
  const [state] = useStore()
  const {t} = useTranslation()

  return (
    <View style={{justifyContent: 'center', alignContent: 'center', flex: 1}}>
      <Header title={t('Request.Title')} />
      <ScrollView style={{marginHorizontal: 10, marginVertical: 10}}>
        {state.requests.map((item: Request, index: number) => {
          return <RequestItem key={index.toString()} item={item} />
        })}
      </ScrollView>
    </View>
  )
}
