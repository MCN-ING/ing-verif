import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'

import Terms from '../screens/Terms'

const TermsStack: React.FC = () => {
  const StackTerms = createStackNavigator()
  const routeName = 'Terms'

  return (
    <StackTerms.Navigator
      initialRouteName={routeName}
      //screenOptions={{headerShown: false }}
    >
      <StackTerms.Screen name={routeName} component={Terms} />
    </StackTerms.Navigator>
  )
}

export default TermsStack
