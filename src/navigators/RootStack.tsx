import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'

import {Home, Settings, Confirmation, QRCodeScreen} from '../screens'

const RootStack = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="QRCode" component={QRCodeScreen} />
      <Stack.Screen name="Settings" component={Settings} />

      <Stack.Screen name="Confirmation" component={Confirmation} options={{presentation: 'modal'}} />
    </Stack.Navigator>
  )
}

export default RootStack
