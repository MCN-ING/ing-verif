import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {ScrollView, View} from 'react-native'

import {LargeButton} from '../components/LargeButton'
import {Header} from '../components/PageHeader'
import {RequestItem} from '../components/RequestItem'
import {useStore} from '../contexts/store'
import {Request} from '../contexts/types'
import {ManageRequestsParamList} from '../navigators/ManageRequestsParamsList'

type requestDetailsProp = StackNavigationProp<ManageRequestsParamList, 'RequestDetails'>

export const ManageRequests = () => {
  const [state] = useStore()
  const {t} = useTranslation()
  const {navigate} = useNavigation<requestDetailsProp>()

  const handleRequestSelection = (item: Request) => {
    // Navigate to request details
    navigate('RequestDetails', {
      item: item,
    })
  }

  return (
    <View style={{flex: 1}}>
      <Header title={t('ManageRequests.Title')} />
      <ScrollView style={{paddingHorizontal: 10, paddingBottom: 10}}>
        {state.requests.map((item: Request, index: number) => {
          return (
            <RequestItem key={index.toString()} item={item} isManaged action={() => handleRequestSelection(item)} />
          )
        })}
      </ScrollView>
      <View style={{marginBottom: 5}}>
        <LargeButton isPrimary title={t('ManageRequests.AddButtonText')} action={() => null} />
      </View>
    </View>
  )
}