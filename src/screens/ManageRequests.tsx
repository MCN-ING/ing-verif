import React, {useState, useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import {Dimensions, ScrollView, View} from 'react-native'

import {LargeButton} from '../components/LargeButton'
import {Header} from '../components/PageHeader'
import {RequestItem} from '../components/RequestItem'
import {useStore} from '../contexts/store'
import {Request} from '../contexts/types'

export const ManageRequests = () => {
  const [state] = useStore()
  const [height, setHeight] = useState<number>(0)
  const {t} = useTranslation()

  useEffect(() => {
    const windowHeight = Dimensions.get('window').height
    setHeight(windowHeight)
  }, [])

  return (
    <View>
      <Header title={t('ManageRequests.Title')} />
      <View style={{justifyContent: 'space-between'}}>
        <ScrollView style={{marginTop: 10, marginHorizontal: 10, maxHeight: 0.5 * height}}>
          {state.requests.map((item: Request, index: number) => {
            return <RequestItem key={index.toString()} item={item} isManaged />
          })}
        </ScrollView>
        <View style={{marginTop: 20}}>
          <LargeButton isPrimary title={t('ManageRequests.AddButtonText')} action={() => null} />
        </View>
      </View>
    </View>
  )
}
