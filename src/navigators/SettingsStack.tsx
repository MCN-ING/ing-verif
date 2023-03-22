import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { useTheme } from '../contexts/theme'
import { About } from '../screens/About'
import { Accessibility } from '../screens/Accessibility'
import { AppSettings } from '../screens/AppSettings'
import { AppTutorial } from '../screens/AppTutorial'
import { ByEmail } from '../screens/ByEmail'
import { Confidentiality } from '../screens/Confidentiality'
import { ContactUs } from '../screens/ContactUs'
import { DisplayLanguage } from '../screens/DisplayLanguage'
import { HelpCenter } from '../screens/HelpCenter'
import { History } from '../screens/History'
import { ImproveApp } from '../screens/ImproveApp'
import { Notification } from '../screens/Notification'
import { Phone } from '../screens/Phone'
import { ReportProblem } from '../screens/ReportProblem'
import { Settings } from '../screens/Settings'
import { TermsUse } from '../screens/TermsUse'
import { TransferWalletApp } from '../screens/TransferWalletApp'
import { UserManual } from '../screens/UserManual'
import { Vulnerability } from '../screens/Vulnerability'

const SettingsStack = (Stack: ReturnType<typeof createStackNavigator>) => {
  const { t } = useTranslation()
  const { ColorPallet } = useTheme()

  return (
    <>
            <Stack.Screen name='Settings' component={Settings} />
      <Stack.Screen
        name="AppSettings"
        component={AppSettings}
        options={{
          title: t('Screens.Settings') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="DisplayLanguage"
        component={DisplayLanguage}
        options={{
          title: t('Screens.Settings') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{
          title: t('Screens.Settings') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          title: t('Screens.Settings') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="HelpCenter"
        component={HelpCenter}
        options={{
          title: t('Screens.Settings') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="AppTutorial"
        component={AppTutorial}
        options={{
          title: t('Screens.Settings') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="UserManual"
        component={UserManual}
        options={{
          title: t('Screens.Settings') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="TransferWallet"
        component={TransferWalletApp}
        options={{
          title: t('Screens.Settings') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="ImproveApp"
        component={ImproveApp}
        options={{
          title: t('Screens.Settings') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: t('Screens.Settings') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="TermsUse"
        component={TermsUse}
        options={{
          title: t('Screens.Settings') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="Confidentiality"
        component={Confidentiality}
        options={{
          title: t('Screens.Settings') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="Vulnerability"
        component={Vulnerability}
        options={{
          title: t('Screens.Settings') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="Accessibility"
        component={Accessibility}
        options={{
          title: t('Screens.Settings') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          title: t('Screens.Settings') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="Phone"
        component={Phone}
        options={{
          title: t('Screens.Settings') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="ByEmail"
        component={ByEmail}
        options={{
          title: t('Screens.Settings') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="ReportProblem"
        component={ReportProblem}
        options={{
          title: t('Screens.Settings') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
    </>
  )
}

export default SettingsStack
