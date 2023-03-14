import {RouteProp, useNavigation, useRoute} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {useLayoutEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Text, View, ScrollView, StyleSheet, TouchableWithoutFeedback, TouchableOpacity} from 'react-native'
import EntypoIcon from 'react-native-vector-icons/Entypo'

import {AttributesList} from '../assets/attributesList'
import {LargeButton} from '../components/LargeButton'
import {RequestDetailItem} from '../components/RequestDetails/RequestDetailItem'
import {DispatchAction} from '../contexts/reducers/store'
import {useStore} from '../contexts/store'
import {useTheme} from '../contexts/theme'
import DefaultComponentsThemes from '../defaultComponentsThemes'
import {ManageRequestsParamList} from '../navigators/ManageRequestsParamsList'

type manageRequestsProp = StackNavigationProp<ManageRequestsParamList, 'ManageRequests'>

export const RequestDetails = () => {
  const [, dispatch] = useStore()
  const {t} = useTranslation()
  const navigation = useNavigation<manageRequestsProp>()
  const defaultStyles = DefaultComponentsThemes()
  const {ColorPallet} = useTheme()
  const route = useRoute<RouteProp<ManageRequestsParamList, 'RequestDetails'>>()
  const item = route.params.item
  const attributes = AttributesList(t)

  const [isOptionsVisible, setIsOptionsVisible] = useState(false)

  const styles = StyleSheet.create({
    detailsTitle: {
      ...defaultStyles.text,
      ...defaultStyles.requestDetailsTitle,
      marginBottom: 10,
    },
    detailsDescription: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    attributePredicate: {
      ...defaultStyles.requestDetailsBody,
      ...defaultStyles.attributePredicate,
    },
    moreActionContainer: {
      position: 'absolute',
      right: 0,
      marginRight: 5,
      marginTop: 10,
      padding: 16,
      borderColor: ColorPallet.lightGray,
      borderWidth: 1,
      backgroundColor: ColorPallet.white,
      zIndex: 2,
      elevation: 3,
      shadowColor: ColorPallet.lightGray,
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.24,
    },
  })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          <TouchableWithoutFeedback onPress={() => setIsOptionsVisible(!isOptionsVisible)}>
            <EntypoIcon name="dots-three-vertical" size={18} color={ColorPallet.white} />
          </TouchableWithoutFeedback>
        </View>
      ),
    })
  })

  const useRequestHandler = () => {
    dispatch({
      type: DispatchAction.PROOF_REQUEST_CHANGED,
      payload: item,
    })

    navigation.navigate('QRCode' as never)
  }

  const editHandler = (attribute: 'Title' | 'Description' | 'Attributes') => {
    //TODO: Go to screen for modifying the field clicked
    navigation.navigate('EditRequest', {
      itemId: item.id,
      attribute: attribute,
    })
  }

  const handleDelete = () => {
    dispatch({
      type: DispatchAction.DELETE_REQUEST,
      payload: item.id,
    })
    navigation.goBack()
  }

  const dismissContextualMenuHandler = () => {
    if (isOptionsVisible) setIsOptionsVisible(false)
  }

  return (
    <TouchableWithoutFeedback onPress={dismissContextualMenuHandler}>
      <View style={{padding: 10, flex: 1}}>
        {isOptionsVisible && (
          <TouchableOpacity style={styles.moreActionContainer} onPress={handleDelete}>
            <Text style={defaultStyles.text}>{t('RequestDetails.DeleteRequestButton')}</Text>
          </TouchableOpacity>
        )}
        <ScrollView contentContainerStyle={{margin: 10}}>
          <RequestDetailItem
            sectionLabel={t('RequestDetails.Name')}
            actionLabel={t('RequestDetails.ModifyRequestButton')}
            containerStyle={{marginBottom: 20}}
            action={() => editHandler('Title')}>
            <Text style={[defaultStyles.text, {maxWidth: '75%'}]}>{item.title}</Text>
          </RequestDetailItem>
          <RequestDetailItem
            sectionLabel={t('RequestDetails.Description')}
            containerStyle={{marginBottom: 20}}
            actionLabel={t('RequestDetails.ModifyRequestButton')}
            action={() => editHandler('Description')}>
            <Text style={[defaultStyles.text, {maxWidth: '75%'}]}>{item.description}</Text>
          </RequestDetailItem>
          <RequestDetailItem
            sectionLabel={t('RequestDetails.Attributes')}
            containerStyle={{marginBottom: 20}}
            actionLabel={t('RequestDetails.ModifyRequestButton')}
            action={() => editHandler('Attributes')}>
            <View>
              {item.attributes && (
                <View style={item.predicates && {marginBottom: 10}}>
                  {Object.keys(item.attributes).map((key, index) =>
                    item.attributes?.[key].names?.map((attributeRawName) => (
                      <Text key={index} style={[styles.attributePredicate, {marginTop: index === 0 ? 0 : 10}]}>
                        {(attributes[attributeRawName] && attributes[attributeRawName].title) ?? attributeRawName}
                      </Text>
                    ))
                  )}
                </View>
              )}
              {item.predicates && (
                <View>
                  {Object.keys(item.predicates).map((key, index) => (
                    <View key={index}>
                      <Text style={[styles.attributePredicate, {marginBottom: 0, maxWidth: '75%'}]}>
                        {(item.predicates?.[key].name && attributes[item.predicates?.[key].name]?.title) ??
                          item.predicates?.[key].name}
                      </Text>
                      <Text style={[defaultStyles.requestDetailsBody, {maxWidth: '75%', color: ColorPallet.darkGray}]}>
                        {t(`Attributes.Predicate.${key}.${item.predicates?.[key].predicateType}`, {
                          value: item.predicates?.[key].predicateValue,
                        })}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </RequestDetailItem>
        </ScrollView>
        <View style={{marginBottom: 42}}>
          <View style={{marginBottom: 24}}>
            <LargeButton action={useRequestHandler} title={t('RequestDetails.UseRequestButton')} isPrimary />
          </View>
          <LargeButton title={t('RequestDetails.BackToRequestListButton')} action={() => navigation.goBack()} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
