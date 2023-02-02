import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'

import {Home, Settings, QRCodeScreen, ValidationResult, Splash} from '../screens'

const RootStack = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="QRCode" component={QRCodeScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ValidationResult" component={ValidationResult} options={{presentation: 'modal'}} />
    </Stack.Navigator>
  )
}

export default RootStack
