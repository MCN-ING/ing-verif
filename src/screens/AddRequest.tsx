import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'
import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import Toast from 'react-native-toast-message'

import {LargeButton} from '../components/LargeButton'
import {AttributesSection} from '../components/ManageRequests/AttributesSection'
import {DescriptionSection} from '../components/ManageRequests/DescriptionSection'
import {TitleSection} from '../components/ManageRequests/TitleSection'
import {ToastType} from '../components/Toast/BaseToast'
import {DispatchAction} from '../contexts/reducers/store'
import {useStore} from '../contexts/store'
import {lightAttributeDetails} from '../contexts/types'
import {createProofRequest} from '../utils/createProofRequest'

export const AddRequest = () => {
  const [, dispatch] = useStore()
  const [requestTitle, setRequestTitle] = useState<string>('')
  const [requestDescription, setRequestDescription] = useState<string>('')
  const [requestAttributes, setRequestAttributes] = useState<lightAttributeDetails[]>([])

  const navigation = useNavigation()

  const styles = StyleSheet.create({
    section: {
      marginHorizontal: 10,
      paddingVertical: 10,
    },
    buttonsContainer: {
      paddingBottom: 50,
    },
  })

  const handleSaveProofRequest = () => {
    try {
      const newProofRequest = createProofRequest(
        {
          title: requestTitle,
          description: requestDescription,
          attributes: requestAttributes,
        },
        t
      )

      // TODO: change this to save to add to the list of proof requests
      dispatch({
        type: DispatchAction.PROOF_REQUEST_CHANGED,
        payload: newProofRequest,
      })

      navigation.navigate('Home' as never)
    } catch (e: any) {
      Toast.show({
        type: ToastType.Error,
        autoHide: true,
        text1: t('Error.AddRequestError'),
        text2: e.message,
      })
    }
  }

  return (
    <ScrollView>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <View style={styles.section}>
            <TitleSection requestTitle={requestTitle} setRequestTitle={setRequestTitle} />
          </View>
          <View style={styles.section}>
            <DescriptionSection requestDescription={requestDescription} setRequestDescription={setRequestDescription} />
          </View>
          <View style={styles.section}>
            <AttributesSection requestAttributes={requestAttributes} setRequestAttributes={setRequestAttributes} />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <LargeButton title={t('ManageRequests.SaveRequest')} action={handleSaveProofRequest} isPrimary={true} />
          <View style={{height: 10}} />
          <LargeButton title={t('ManageRequests.Cancel')} action={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  )
}
