import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {getFocusedRouteNameFromRoute} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {TFunction} from 'i18next'
import React from 'react'
import {useTranslation} from 'react-i18next'
import Icon from 'react-native-vector-icons/FontAwesome'

import {useTheme} from '../contexts/theme'
import {Home, Settings, QRCodeScreen, ValidationResult, Splash, Requests} from '../screens'
import {ManageRequests} from '../screens/ManageRequests'
import {RequestDetails} from '../screens/RequestDetails'

import TermsStack from './TermsStack'

const getTitle = (route: any, t: TFunction<'translation', undefined, 'translation'>) => {
  const routeName = getFocusedRouteNameFromRoute(route)
  switch (routeName) {
    case 'Home':
      return t('Screens.Home') || ''
    case 'Requests':
      return t('Screens.Requests') || ''
    case 'ManageRequests':
      return t('Screens.ManageRequests') || ''
    default:
      return t('Screens.Home') || ''
  }
}

const RootStack = () => {
  const {t} = useTranslation()
  const Stack = createStackNavigator()
  const {ColorPallet} = useTheme()

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
      <Stack.Screen name="Settings" component={Settings} />
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
    </Stack.Navigator>
  )
}

const BottomNav = () => {
  const {ColorPallet} = useTheme()
  const Tab = createBottomTabNavigator()
  const {t} = useTranslation()

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => null,
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          title: t('Screens.Home') || '',
          tabBarIcon: ({focused}) => (
            <Icon name={'home'} color={focused ? ColorPallet.primary : ColorPallet.lightGray} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name={'ManageRequests'}
        component={ManageRequests}
        options={{
          title: t('Screens.Requests') || '',
          tabBarIcon: ({focused}) => (
            <Icon name={'list'} color={focused ? ColorPallet.primary : ColorPallet.lightGray} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default RootStack
