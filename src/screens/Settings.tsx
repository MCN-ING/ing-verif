import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {View, Text} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'

export const Settings = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Settings</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Confirmation' as never)
        }}>
        <Text>Confirmnation</Text>
      </TouchableOpacity>
    </View>
  )
}
