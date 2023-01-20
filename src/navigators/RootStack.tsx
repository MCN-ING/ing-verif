import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'

import {Home, Settings} from '../screens'

const RootStack = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}

export default RootStack
