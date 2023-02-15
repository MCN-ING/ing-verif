import {useNavigation} from '@react-navigation/core'
import React, {useCallback, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {ScrollView, StyleSheet, Text, View, Linking} from 'react-native'

import CheckBoxRow from '../components/CheckBoxRow'
import {LargeButton} from '../components/LargeButton'
import {Header} from '../components/PageHeader'
import {AccordionItem} from '../components/react-native-accordion-list-view'
import {useTheme} from '../contexts/theme'
import defaultComponentsThemes from '../defaultComponentsThemes'

const Terms: React.FC = () => {
  // const [store, dispatch] = useStore()
  const [checked, setChecked] = useState(false)
  const {t} = useTranslation()
  const navigation = useNavigation()
  const {ColorPallet} = useTheme()
  const defaultStyle = defaultComponentsThemes()
  const style = StyleSheet.create({
    container: {
      backgroundColor: ColorPallet.primaryBackground,
      paddingHorizontal: 20,
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

    navigation.navigate('Home' as never)
  }, [])

  const openLink = async (url: string) => {
    // Only `https://` is allowed. Update manifest as needed.
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      // Will open in device browser.
      await Linking.openURL(url)
    }
  }

  return (
    <View style={[style.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
                title={t('TermsV2.Credential')}
                accessibilityLabel={t('TermsV2.IAgree') || ''}
                checked={checked}
                onPress={() => setChecked(!checked)}
              />
              <View style={[{paddingTop: 10}]}>
                <LargeButton
                  title={t('Global.Continue')}
                  action={onSubmitPressed}
                  disabled={!checked}
                  isPrimary></LargeButton>
              </View>
            </>
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default Terms
