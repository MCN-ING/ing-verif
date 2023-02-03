import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {StyleSheet, Text} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'

import {useTheme} from '../../contexts/theme'
import DefaultComponentsThemes from '../../defaultComponentsThemes'

export interface ItemInfo {
  id: number
  title: string
  body: string
  action: string
}

export const SliderItem = ({id, title, body, action}: ItemInfo) => {
  const {ColorPallet} = useTheme()
  const defaultStyle = DefaultComponentsThemes()
  const {navigate} = useNavigation()

  const styles = StyleSheet.create({
    container: {
      width: 220,
      height: '80%',
      borderRadius: 4,
      marginHorizontal: 20,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: ColorPallet.primary,
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    firstCardStyle: {
      backgroundColor: ColorPallet.primary,
    },
    firstCardTextStyle: {
      color: ColorPallet.white,
    },
  })

  return (
    <TouchableOpacity
      style={[styles.container, id == 0 && styles.firstCardStyle]}
      onPress={() => navigate(action as never)}>
      <Text style={[defaultStyle.text, id == 0 && styles.firstCardTextStyle, {fontWeight: '600'}]}>{title}</Text>
      <Text style={[defaultStyle.text, id == 0 && styles.firstCardTextStyle, {paddingTop: 15}]}>{body}</Text>
    </TouchableOpacity>
  )
}
