import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {getFocusedRouteNameFromRoute, NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {TFunction} from 'i18next'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import {useTheme} from '../contexts/theme'
import DefaultComponentsThemes from '../defaultComponentsThemes'
import {Home, Settings, QRCodeScreen, ValidationResult, Splash, Requests} from '../screens'
import { About } from '../screens/About'
import { Accessibility } from '../screens/Accessibility'
import {AddRequest} from '../screens/AddRequest'
import { AppSettings } from '../screens/AppSettings'
import { AppTutorial } from '../screens/AppTutorial'
import { ByEmail } from '../screens/ByEmail'
import { Confidentiality } from '../screens/Confidentiality'
import { ContactUs } from '../screens/ContactUs'
import { DisplayLanguage } from '../screens/DisplayLanguage'
import { HelpCenter } from '../screens/HelpCenter'
import { History } from '../screens/History'
import { ImproveApp } from '../screens/ImproveApp'
import {EditRequest} from '../screens/EditRequest'
import {ManageRequests} from '../screens/ManageRequests'
import { Notification } from '../screens/Notification'
import { Phone } from '../screens/Phone'
import { ReportProblem } from '../screens/ReportProblem'
import {RequestDetails} from '../screens/RequestDetails'
import { TermsUse } from '../screens/TermsUse'
import { TransferWalletApp } from '../screens/TransferWalletApp'
import { UserManual } from '../screens/UserManual'
import { Vulnerability } from '../screens/Vulnerability'

import TermsStack from './TermsStack'
import SettingsStack from './SettingsStack'

const getTitle = (route: any, t: TFunction<'translation', undefined, 'translation'>) => {
  const routeName = getFocusedRouteNameFromRoute(route)
  switch (routeName) {
    case 'Home':
      return t('Screens.Home') || ''
    case 'Requests':
      return t('Screens.Requests') || ''
    case 'ManageRequests':
      return t('Screens.ManageRequests') || ''
    case 'Settings':
        return t('Screens.Settings') || ''
    default:
      return t('Screens.Home') || ''
  }
}

const RootStack = () => {
  const {t} = useTranslation()
  const Stack = createStackNavigator()
  const {ColorPallet} = useTheme()
  const settingsStack = SettingsStack(Stack)

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerStyle: {
          backgroundColor: ColorPallet.primary,
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
          gestureEnabled: false,
          headerLeft: () => false,
        }}
      />
      <Stack.Screen
        name="TermsStack"
        component={TermsStack}
        options={{
          title: t('Screens.Terms') || '',
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="HomeStack"
        options={({route}) => ({
          title: getTitle(route, t),
          headerLeft: () => false,
          headerTintColor: ColorPallet.white,
          gestureEnabled: false,
        })}
        component={BottomNav}
      />
      <Stack.Screen
        name="Requests"
        component={Requests}
        options={{
          title: t('Screens.Requests') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          gestureEnabled: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />

      <Stack.Screen
        name="RequestDetails"
        component={RequestDetails}
        options={{
          title: t('Screens.RequestDetails'),
          headerTintColor: ColorPallet.white,
          headerShown: true,
          gestureEnabled: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="EditRequest"
        component={EditRequest}
        options={{
          headerTintColor: ColorPallet.white,
          headerShown: true,
          gestureEnabled: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="QRCode"
        component={QRCodeScreen}
        options={{
          title: t('Screens.QRCode') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          gestureEnabled: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="ValidationResult"
        component={ValidationResult}
        options={{
          presentation: 'modal',
          title: t('Screens.Validation') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          gestureEnabled: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      <Stack.Screen
        name="AddRequest"
        component={AddRequest}
        options={{
          title: t('Screens.AddRequest') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          gestureEnabled: true,
          headerBackTitle: t('Global.Back') || '',
        }}
      />
      {settingsStack}
    </Stack.Navigator>

  )
}

const BottomNav = () => {
  const {ColorPallet} = useTheme()
  const Tab = createBottomTabNavigator()
  const {t} = useTranslation()
  const styles = DefaultComponentsThemes()

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => null,
        tabBarLabelStyle: {
          fontSize: 12,
          position: 'relative',
          textAlignVertical: 'center',
          fontWeight: '600',
        },
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          title: t('Screens.Home') || '',
          tabBarIcon: ({focused}) => (
            <View style={{width: '100%', height: '100%'}}>
              {focused && <View style={styles.tabBarActive} />}
              <Icon
                style={styles.tabBarIcone}
                name={'home'}
                color={focused ? ColorPallet.primary : ColorPallet.lightGray}
                size={20}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'ManageRequests'}
        component={ManageRequests}
        options={{
          title: t('Screens.Requests') || '',
          tabBarIcon: ({focused}) => (
            <View style={{width: '100%', height: '100%'}}>
              {focused && <View style={styles.tabBarActive} />}
              <Icon
                style={styles.tabBarIcone}
                name={'list'}
                color={focused ? ColorPallet.primary : ColorPallet.lightGray}
                size={20}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'Settings'}
        component={Settings}
        options={{
          title: t('Screens.Settings') || '',
          tabBarIcon: ({focused}) => (
            <View style={{width: '100%', height: '100%'}}>
              {focused && <View style={styles.tabBarActive} />}
              <Icon
                style={styles.tabBarIcone}
                name={'ellipsis-h'}
                color={focused ? ColorPallet.primary : ColorPallet.lightGray}
                size={20}
              />
            </View>
          ),
        }}
      />
      
    </Tab.Navigator>
  )
}

export default RootStack
