import {RouteProp, useNavigation, useRoute} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {useEffect, useLayoutEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Keyboard, StyleSheet, TouchableWithoutFeedback, View} from 'react-native'

import {LargeButton} from '../components/LargeButton'
import {DescriptionSection} from '../components/ManageRequests/DescriptionSection'
import {TitleSection} from '../components/ManageRequests/TitleSection'
import {DispatchAction} from '../contexts/reducers/store'
import {useStore} from '../contexts/store'
import {Request} from '../contexts/types'
import {ManageRequestsParamList} from '../navigators/ManageRequestsParamsList'

type editRequestProps = StackNavigationProp<ManageRequestsParamList, 'RequestDetails'>

export const EditRequest = () => {
  const route = useRoute<RouteProp<ManageRequestsParamList, 'EditRequest'>>()
  const [state, dispatch] = useStore()
  const {t} = useTranslation()
  const [item, setItem] = useState<Request>(state.requests.find((req) => req.id === route.params.itemId) as Request)
  const navigation = useNavigation<editRequestProps>()
  const [title, setTitle] = useState<string>(item.title)
  const [description, setDescription] = useState<string>(item.description)

  const styles = StyleSheet.create({
    section: {
      marginHorizontal: 10,
      paddingVertical: 10,
    },
    buttonsContainer: {
      paddingBottom: 50,
    },
  })

  useEffect(() => {
    setTitle(item.title)
    setDescription(item.description)
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: t(`Screens.EditRequest.${route.params.attribute}`),
    })
  }, [])

  const handleBlur = () => {
    Keyboard.dismiss()
    setItem((prevItem) => ({
      ...prevItem,
      title: title,
      description: description,
    }))
  }

  const handleSave = () => {
    if (title.trim().length > 0) {
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
              <TitleSection requestTitle={title} setRequestTitle={setTitle} />
            </View>
          )}
          {route.params.attribute === 'Description' && (
            <DescriptionSection
              requestDescription={description}
              setRequestDescription={setDescription}
              maxLength={140}
            />
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
