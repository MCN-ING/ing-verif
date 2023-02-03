import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import {useTranslation} from 'react-i18next'

import {useTheme} from '../contexts/theme'
import {Home, Settings, QRCodeScreen, ValidationResult} from '../screens'

const RootStack = () => {
  const {t} = useTranslation()
  const Stack = createStackNavigator()
  const {ColorPallet} = useTheme()

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: ColorPallet.primary,
        },
      }}>
      <Stack.Screen
        name="Home"
        options={{
          title: t('Screens.Home') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          gestureEnabled: false,
          headerLeft: () => false,
        }}
        component={Home}
      />
      <Stack.Screen
        name="QRCode"
        component={QRCodeScreen}
        options={{
          title: t('Screens.QRCode') || '',
          headerTintColor: ColorPallet.white,
          headerShown: true,
          gestureEnabled: true,
        }}
      />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ValidationResult" component={ValidationResult} options={{presentation: 'modal'}} />
    </Stack.Navigator>
  )
}

export default RootStack
