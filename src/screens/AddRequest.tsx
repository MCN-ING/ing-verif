import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'
import React, {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'

import {LargeButton} from '../components/LargeButton'
import {AttributesSection} from '../components/ManageRequests/AttributesSection'
import {DescriptionSection} from '../components/ManageRequests/DescriptionSection'
import {TitleSection} from '../components/ManageRequests/TitleSection'
import {DispatchAction} from '../contexts/reducers/store'
import {useStore} from '../contexts/store'
import {useTheme} from '../contexts/theme'
import {lightAttributeDetails} from '../contexts/types'
import DefaultComponentsThemes from '../defaultComponentsThemes'
import {createProofRequest} from '../utils/createProofRequest'
import {isValidAttributes} from '../utils/validateAttributes'

export const AddRequest = () => {
  const [, dispatch] = useStore()
  const [requestTitle, setRequestTitle] = useState<string>('')
  const [titleDirty, setTitleDirty] = useState(false)
  const [requestDescription, setRequestDescription] = useState<string>('')
  const [requestAttributes, setRequestAttributes] = useState<lightAttributeDetails[]>([])
  const [attributesDirty, setAttributesDirty] = useState(false)
  const defaultStyles = DefaultComponentsThemes()
  const {ColorPallet} = useTheme()

  const navigation = useNavigation()

  const styles = StyleSheet.create({
    section: {
      marginHorizontal: 10,
      paddingVertical: 10,
    },
    buttonsContainer: {
      paddingBottom: 50,
    },
    error: {
      ...defaultStyles.text,
      color: ColorPallet.error,
      fontWeight: 'bold',
    },
    containerStyleTitle: {
      borderColor: requestTitle.trim().length === 0 && titleDirty ? ColorPallet.error : ColorPallet.lightGray,
      borderWidth: requestTitle.trim().length === 0 && titleDirty ? 2 : 1,
    },
    containerStyleAttributes: {
      borderColor: !isValidAttributes(requestAttributes) && attributesDirty ? ColorPallet.error : ColorPallet.lightGray,
      borderWidth: !isValidAttributes(requestAttributes) && attributesDirty ? 2 : 1,
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

      dispatch({
        type: DispatchAction.ADD_REQUEST,
        payload: newProofRequest,
      })

      navigation.navigate('Home' as never)
    } catch (e: unknown) {
      if (requestTitle.length === 0) setTitleDirty(true)
      if (!isValidAttributes(requestAttributes)) setAttributesDirty(true)
    }
  }

  const handleTitleChange = (value: string) => {
    setTitleDirty(true)
    setRequestTitle(value)
  }

  return (
    <ScrollView>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <View style={styles.section}>
            <TitleSection
              requestTitle={requestTitle}
              setRequestTitle={handleTitleChange}
              containerStyles={styles.containerStyleTitle}
            />
            {requestTitle.length === 0 && titleDirty && <Text style={styles.error}>{t('Error.EmptyTitle')}</Text>}
          </View>
          <View style={styles.section}>
            <DescriptionSection
              maxLength={140}
              requestDescription={requestDescription}
              setRequestDescription={setRequestDescription}
            />
          </View>
          <View style={styles.section}>
            <AttributesSection
              requestAttributes={requestAttributes}
              setRequestAttributes={setRequestAttributes}
              containerStyles={styles.containerStyleAttributes}
            />
            {!isValidAttributes(requestAttributes) && attributesDirty && (
              <Text style={styles.error}>{t('Error.EmptyAttributes')}</Text>
            )}
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
