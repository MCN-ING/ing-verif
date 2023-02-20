import {t} from 'i18next'
import React from 'react'
import {View} from 'react-native'

import {Header} from '../components/PageHeader'
import {RequestComponent} from '../components/RequestComponent'
import {useStore} from '../contexts/store'
import {Request} from '../contexts/types'

export const Requests = () => {
  const [state] = useStore()

  return (
    <View style={{justifyContent: 'center', alignContent: 'center'}}>
      <Header title={t('Request.Title')} />
      <View style={{marginTop: 10}}>
        {state.requests.map((item: Request, index: number) => {
          return <RequestComponent key={index.toString()} item={item} />
        })}
      </View>
    </View>
  )
}
