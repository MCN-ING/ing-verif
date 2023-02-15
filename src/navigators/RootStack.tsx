import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import {useTranslation} from 'react-i18next'
import Icon from 'react-native-vector-icons/FontAwesome'

import {useTheme} from '../contexts/theme'
import {Home, Settings, QRCodeScreen, ValidationResult, Splash, Requests} from '../screens'

import TermsStack from './TermsStack'

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
        options={{
          headerTitle: 'Home',
          headerLeft: () => false,
          headerTintColor: ColorPallet.white,
        }}
        component={BottomNav}
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

  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name={'home'} color={focused ? ColorPallet.primary : ColorPallet.lightGray} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name={'Requests'}
        component={Requests}
        options={{
          tabBarStyle: {},
          tabBarIcon: ({focused}) => (
            <Icon name={'list'} color={focused ? ColorPallet.primary : ColorPallet.lightGray} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default RootStack
