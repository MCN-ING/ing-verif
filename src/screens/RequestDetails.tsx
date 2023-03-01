import {RouteProp, useNavigation, useRoute} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {useTranslation} from 'react-i18next'
import {Text, View, ScrollView, StyleSheet} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'

import {LargeButton} from '../components/LargeButton'
import {RequestDetailItem} from '../components/RequestDetails/RequestDetailItem'
import {Separator} from '../components/Separator'
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
      ...defaultStyles.text,
      ...defaultStyles.requestDetailsBody,
      ...defaultStyles.attributePredicate,
    },
  })

  const useRequestHandler = () => {
    dispatch({
      type: DispatchAction.PROOF_REQUEST_CHANGED,
      payload: item,
    })

    navigation.navigate('QRCode' as never)
  }

  const editHandler = () => {
    //TODO: Go to screen for modifying the field clicked
  }

  return (
    <View style={{padding: 10, flex: 1}}>
      <ScrollView contentContainerStyle={{margin: 10}}>
        <RequestDetailItem
          sectionLabel={t('RequestDetails.Name')}
          sectionDescription={item.title}
          containerStyle={{marginBottom: 20}}
          action={editHandler}
        />
        <RequestDetailItem
          sectionLabel={t('RequestDetails.Description')}
          sectionDescription={item.description}
          containerStyle={{marginBottom: 20}}
          action={editHandler}
        />
        <View style={{marginBottom: 20}}>
          <View style={[styles.detailsDescription, {marginBottom: 10}]}>
            <Text style={[defaultStyles.text, defaultStyles.requestDetailsTitle]}>
              {t('RequestDetails.Attributes')}
            </Text>
            <TouchableOpacity onPress={editHandler}>
              <Text style={defaultStyles.link}>{t('RequestDetails.ModifyRequestButton')}</Text>
            </TouchableOpacity>
          </View>
          {item.attributes && (
            <View style={item.predicates && {marginBottom: 10}}>
              {Object.keys(item.attributes).map((key, index) => (
                <Text key={index} style={[styles.attributePredicate, {marginTop: 10}]}>
                  {item.attributes?.[key].names?.[0]}
                </Text>
              ))}
            </View>
          )}
          {item.predicates && (
            <View>
              {Object.keys(item.predicates).map((key, index) => (
                <View key={index}>
                  <Text style={[styles.attributePredicate, {marginBottom: 10}]}>{item.predicates?.[key].name}</Text>
                  <Text style={defaultStyles.requestDetailsBody}>
                    {item.predicates?.[key].predicateValue}{' '}
                    {t(`Comparaison.${key}.${item.predicates?.[key].predicateType}`)}
                  </Text>
                </View>
              ))}
            </View>
          )}
          <Separator color={ColorPallet.darkGray} />
        </View>
      </ScrollView>

      <View>
        <View style={{marginBottom: 20}}>
          <LargeButton action={useRequestHandler} title={t('RequestDetails.UseRequestButton')} isPrimary />
        </View>
        <View style={{marginBottom: 20}}>
          <LargeButton
            action={() => null}
            title={t('RequestDetails.DeleteRequestButton')}
            isPrimary
            color={ColorPallet.error}
          />
        </View>
        <LargeButton title={t('RequestDetails.BackToRequestListButton')} action={() => navigation.goBack()} />
      </View>
    </View>
  )
}
