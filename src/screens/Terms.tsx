import {useNavigation} from '@react-navigation/native'
import React, {useCallback, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {ScrollView, StyleSheet, Text, View, Linking, SafeAreaView} from 'react-native'


import CheckBoxRow from '../components/CheckBoxRow'
import {LargeButton} from '../components/LargeButton'
import {NotificationBox} from '../components/NotificationBox'
import {Header} from '../components/PageHeader'
import {AccordionItem} from '../components/react-native-accordion-list-view'
import {useTheme} from '../contexts/theme'
import defaultComponentsThemes from '../defaultComponentsThemes'

const Terms: React.FC = () => {
  // const [store, dispatch] = useStore()
  const [checked, setChecked] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const {t} = useTranslation()
  const navigation = useNavigation()
  const {ColorPallet} = useTheme()
  const defaultStyle = defaultComponentsThemes()
  const style = StyleSheet.create({
    container: {
      backgroundColor: ColorPallet.primaryBackground,
    },
    bodyText: {
      ...defaultStyle.text,
      flexShrink: 1,
    },
    titleText: {
      ...defaultStyle.text,
      textDecorationLine: 'underline',
    },
    title: {
      ...defaultStyle.subtitle,
    },
    controlsContainer: {
      marginTop: 'auto',
      marginBottom: 20,
    },
    paragraph: {
      flexDirection: 'row',
      marginTop: 20,
    },
    enumeration: {
      ...defaultStyle.text,
      marginRight: 25,
    },
    link: {
      ...defaultStyle.text,
      color: ColorPallet.link,
      textDecorationLine: 'underline',
      fontWeight: 'bold',
    },
  })

  const onSubmitPressed = useCallback(() => {
    /*dispatch({
      type: DispatchAction.DID_AGREE_TO_TERMS,
      payload: [{DidAgreeToTerms: checked}],
    })*/
    setFormSubmitted(true)

    if (!checked) return
    
    navigation.navigate('Home' as never)
  }, [checked, formSubmitted])


  /* 
  const openLink = async (url: string) => {
    // Only `https://` is allowed. Update manifest as needed.
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      // Will open in device browser.
      await Linking.openURL(url)
    }
  }
  */

  return (
    <SafeAreaView style={[style.container]}>
      <ScrollView style={{paddingHorizontal: 20}} showsVerticalScrollIndicator={false}>
        <Header title={t('TermsV2.title')}></Header>
        <Text>{t('TermsV2.Consent.body')}</Text>
        <Text style={[style.title, {marginTop: 20}]}>{t('TermsV2.Consent.title')}</Text>
        <Text style={[style.bodyText, {marginTop: 20}]}>{t('TermsV2.Consent.body')}</Text>

        <Text style={[style.title, {marginTop: 20}]}>{t('TermsV2.Consent.PersonalUse.title')}</Text>
        <Text style={[style.bodyText, {marginTop: 20, marginBottom: 20}]}>{t('TermsV2.Consent.PersonalUse.body')}</Text>
        <AccordionItem
          customTitle={() => <Text style={[style.title]}>{t('TermsV2.Consent.PersonalUse.subsection.title')}</Text>}
          customBody={() => (
            <Text style={[style.bodyText, {margin: 20}]}>{t('TermsV2.Consent.PersonalUse.subsection.body')}</Text>
          )}></AccordionItem>

        <Text style={[style.title, {marginTop: 20}]}>{t('TermsV2.Consent.IdentityTheft.title')}</Text>
        <Text style={[style.bodyText, {marginTop: 20, marginBottom: 20}]}>
          {t('TermsV2.Consent.IdentityTheft.body')}
        </Text>
        <AccordionItem
          customTitle={() => <Text style={[style.title]}>{t('TermsV2.Consent.IdentityTheft.subsection.title')}</Text>}
          customBody={() => (
            <Text style={[style.bodyText, {margin: 20}]}>{t('TermsV2.Consent.IdentityTheft.subsection.body')}</Text>
          )}></AccordionItem>

        <Text style={[style.title, {marginTop: 20}]}>{t('TermsV2.Consent.Privacy.title')}</Text>
        <Text style={[style.bodyText, {marginTop: 20, marginBottom: 20, marginVertical: 20}]}>
          {t('TermsV2.Consent.Privacy.body')}
        </Text>
        <AccordionItem
          containerStyle={{marginBottom: 20}}
          customTitle={() => <Text style={[style.title]}>{t('TermsV2.Consent.Privacy.subsection.title')}</Text>}
          customBody={() => (
            <Text style={[style.bodyText, {margin: 20}]}>{t('TermsV2.Consent.Privacy.subsection.body')}</Text>
          )}></AccordionItem>

        <View style={[style.controlsContainer]}>
          {
            /*!(store.onboarding.didAgreeToTerms && store.authentication.didAuthenticate) && */
            <>
              <CheckBoxRow
                title={t('TermsV2.Credential.Body')}
                accessibilityLabel={t('TermsV2.IAgree') || ''}
                checked={checked}
                onPress={() => setChecked(!checked)}
              />
              {!checked && formSubmitted && <NotificationBox type="warning" body={t('TermsV2.Credential.Error')} />}
              <View style={[{paddingTop: 10}]}>
                <LargeButton title={t('Global.Continue')} action={onSubmitPressed} isPrimary></LargeButton>
              </View>
            </>
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Terms
