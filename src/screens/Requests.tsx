import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {ScrollView, View} from 'react-native'

import {EmptyList} from '../components/EmptyList'
import {Header} from '../components/PageHeader'
import {RequestItem} from '../components/RequestItem'
import {DispatchAction} from '../contexts/reducers/store'
import {useStore} from '../contexts/store'
import {Request} from '../contexts/types'

export const Requests = () => {
  const [state, dispatch] = useStore()
  const {t} = useTranslation()
  const {navigate} = useNavigation()

  function handleSelection(item: Request) {
    dispatch({
      type: DispatchAction.PROOF_REQUEST_CHANGED,
      payload: item,
    })
    navigate('QRCode' as never)
  }

  return (
    <View style={{justifyContent: 'center', alignContent: 'center', flex: 1}}>
      <Header title={t('Request.Title')} />
      {state.requests.length === 0 && (
        <EmptyList
          body={t('RequestDetails.EmptyList')}
          actionLabel={t('ManageRequests.AddButtonText')}
          action={() => null}
        />
      )}
      <ScrollView style={{padding: 10}}>
        {state.requests.map((item: Request, index: number) => {
          return <RequestItem key={index.toString()} item={item} action={() => handleSelection(item)} />
        })}
      </ScrollView>
    </View>
  )
}
