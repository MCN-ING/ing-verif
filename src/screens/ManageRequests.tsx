import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {FlatList, View} from 'react-native'

import {EmptyList} from '../components/EmptyList'
import {LargeButton} from '../components/LargeButton'
import {Header} from '../components/PageHeader'
import {RequestItem} from '../components/RequestItem'
import {DispatchAction} from '../contexts/reducers/store'
import {useStore} from '../contexts/store'
import {Request} from '../contexts/types'
import {ManageRequestsParamList} from '../navigators/ManageRequestsParamsList'

type requestDetailsProp = StackNavigationProp<ManageRequestsParamList, 'RequestDetails'>

export const ManageRequests = () => {
  const [state, dispatch] = useStore()
  const [requests, setRequests] = useState<Request[]>([])
  const {t} = useTranslation()
  const {navigate} = useNavigation<requestDetailsProp>()

  useEffect(() => {
    setRequests(state.requests)
  }, [state.requests])

  const handleRequestSelection = (item: Request) => {
    // Navigate to request details
    navigate('RequestDetails', {
      item: item,
    })
  }

  const handleDelete = (item: Request) => {
    setRequests(requests.filter((req) => req.id !== item.id))
    dispatch({
      type: DispatchAction.DELETE_REQUEST,
      payload: item.id,
    })
    if (state.proofRequest) {
      if (item.id == state.proofRequest.id) {
        dispatch({
          type: DispatchAction.PROOF_REQUEST_CHANGED,
          payload: undefined,
        })
      }
    }
  }

  return (
    <View style={{flex: 1}}>
      <Header title={t('ManageRequests.Title')} />
      {requests.length === 0 && (
        <EmptyList
          body={t('RequestDetails.EmptyList')}
          action={() => navigate('AddRequest')}
          actionLabel={t('ManageRequests.AddButtonText')}
        />
      )}
      {requests.length > 0 && (
        <FlatList
          data={requests}
          renderItem={({item}) => (
            <View style={{paddingHorizontal: 10, paddingBottom: 10}}>
              <RequestItem
                item={item}
                isManaged
                onDelete={() => handleDelete(item)}
                action={() => handleRequestSelection(item)}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
      {requests.length > 0 && (
        <View style={{marginBottom: 5}}>
          <LargeButton isPrimary title={t('ManageRequests.AddButtonText')} action={() => navigate('AddRequest')} />
        </View>
      )}
    </View>
  )
}
