import {RouteProp, useNavigation, useRoute} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {useLayoutEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native'

import {LargeButton} from '../components/LargeButton'
import {AttributesSection} from '../components/ManageRequests/AttributesSection'
import {DescriptionSection} from '../components/ManageRequests/DescriptionSection'
import {TitleSection} from '../components/ManageRequests/TitleSection'
import {DispatchAction} from '../contexts/reducers/store'
import {useStore} from '../contexts/store'
import {useTheme} from '../contexts/theme'
import {lightAttributeDetails, Request} from '../contexts/types'
import DefaultComponentsThemes from '../defaultComponentsThemes'
import {ManageRequestsParamList} from '../navigators/ManageRequestsParamsList'
import {createProofRequest} from '../utils/createProofRequest'
import {requestAttributesToLightAttributesDetail} from '../utils/requestAttributesToLightAttributeDetails'
import {isValidAttributes} from '../utils/validateAttributes'

type editRequestProps = StackNavigationProp<ManageRequestsParamList, 'RequestDetails'>

export const EditRequest = () => {
  const route = useRoute<RouteProp<ManageRequestsParamList, 'EditRequest'>>()
  const [state, dispatch] = useStore()
  const {t} = useTranslation()
  const navigation = useNavigation<editRequestProps>()
  const {ColorPallet} = useTheme()
  const defaultStyles = DefaultComponentsThemes()

  const [item, setItem] = useState<Request>(state.requests.find((req) => req.id === route.params.itemId) as Request)
  const lightAttributes = requestAttributesToLightAttributesDetail(item?.attributes, item?.predicates)

  const [title, setTitle] = useState<string>(item.title)
  const [description, setDescription] = useState<string>(item.description)
  const [requestAttributes, setRequestAttributes] = useState<lightAttributeDetails[]>(lightAttributes)

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
      borderColor: title.trim().length === 0 ? ColorPallet.error : ColorPallet.lightGray,
      borderWidth: title.trim().length === 0 ? 2 : 1,
    },
    containerStyleAttributes: {
      borderColor: !isValidAttributes(requestAttributes) ? ColorPallet.error : ColorPallet.lightGray,
      borderWidth: !isValidAttributes(requestAttributes) ? 2 : 1,
    },
  })

  useLayoutEffect(() => {
    navigation.setOptions({
      title: t(`Screens.EditRequest.${route.params.attribute}`),
    })
  }, [])

  const handleBlur = () => {
    Keyboard.dismiss()
    try {
      const newProofRequest = createProofRequest(
        {
          title: title,
          description: description,
          attributes: requestAttributes,
        },
        t
      )

      setItem((prevItem) => ({
        ...prevItem,
        title: title,
        description: description.trim().length === 0 ? newProofRequest.description : description,
        attributes: newProofRequest.attributes,
        predicates: newProofRequest.predicates,
      }))
    } catch {
      //
    }
  }

  const handleSave = () => {
    if (title.trim().length > 0 && isValidAttributes(requestAttributes)) {
      dispatch({
        type: DispatchAction.UPDATE_REQUEST,
        payload: item,
      })
      navigation.navigate('RequestDetails', {
        item: item,
      })
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handleBlur}>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={styles.section}>
          {route.params.attribute === 'Title' && (
            <View>
              <TitleSection
                requestTitle={title}
                setRequestTitle={setTitle}
                containerStyles={styles.containerStyleTitle}
              />
              {title.length === 0 && <Text style={styles.error}>{t('Error.EmptyTitle')}</Text>}
            </View>
          )}
          {route.params.attribute === 'Description' && (
            <DescriptionSection
              requestDescription={description}
              setRequestDescription={setDescription}
              maxLength={140}
            />
          )}
          {route.params.attribute === 'Attributes' && (
            <View>
              <AttributesSection
                requestAttributes={requestAttributes}
                setRequestAttributes={setRequestAttributes}
                containerStyles={styles.containerStyleAttributes}
              />
              {!isValidAttributes(requestAttributes) && <Text style={styles.error}>{t('Error.EmptyAttributes')}</Text>}
            </View>
          )}
        </View>
        <View style={{marginBottom: 42}}>
          <View style={{marginBottom: 24}}>
            <LargeButton isPrimary action={handleSave} title={t('Screens.EditRequest.Save')} />
          </View>
          <LargeButton action={() => navigation.goBack()} title={t('Screens.EditRequest.Cancel')} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
