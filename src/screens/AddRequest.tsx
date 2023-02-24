import {useNavigation} from '@react-navigation/native'
import {t} from 'i18next'
import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'

import {LargeButton} from '../components/LargeButton'
import {AttributesSection} from '../components/ManageRequests/AttributesSection'
import {DescriptionSection} from '../components/ManageRequests/DescriptionSection'
import {PredicatesSection} from '../components/ManageRequests/PredicatesSection'
import {TitleSection} from '../components/ManageRequests/TitleSection'

export const AddRequest = () => {
  const [requestTitle, setRequestTitle] = useState('')
  const [requestDescription, setRequestDescription] = useState('')
  const [requestAttributes, setRequestAttributes] = useState([{title: '', value: ''}])
  const [requestPredicates, setRequestPredicates] = useState([{title: '', value: '', operateur: ''}])

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

  return (
    <ScrollView contentContainerStyle={{flex: 1, height: '100%'}}>
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
          <View style={styles.section}>
            <PredicatesSection requestPredicates={requestPredicates} setRequestPredicates={setRequestPredicates} />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <LargeButton
            title={t('ManageRequests.SaveRequest')}
            action={() => {
              return
            }}
            isPrimary={true}
          />
          <View style={{height: 10}} />
          <LargeButton title={t('ManageRequests.Cancel')} action={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  )
}
