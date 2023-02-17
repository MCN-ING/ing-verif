import {t} from 'i18next'
import React, {useEffect, useState} from 'react'
import {View} from 'react-native'

import {RequestsList} from '../assets/RequestsList'
import {Header} from '../components/PageHeader'
import {RequestComponent} from '../components/RequestComponent'

export const Requests = () => {
  const [requestsList, setRequestsList] = useState<any[]>([])

  useEffect(() => {
    setRequestsList(RequestsList(t))
  }, [])

  return (
    <View style={{justifyContent: 'center', alignContent: 'center'}}>
      <Header title={t('Request.Title')} />
      <View style={{marginTop: 10}}>
        {requestsList.map((item, index) => {
          return <RequestComponent key={index.toString()} item={item} />
        })}
      </View>
    </View>
  )
}
