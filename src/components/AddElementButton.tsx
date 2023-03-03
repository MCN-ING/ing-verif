import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import {useTheme} from '../contexts/theme'
import DefaultComponentsThemes from '../defaultComponentsThemes'

type Props = {
  title: string
  handlePress: () => void
}

export const AddElementButton = ({title, handlePress}: Props) => {
  const defaultStyles = DefaultComponentsThemes()
  const {ColorPallet} = useTheme()
  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonStyle: {
      padding: 10,
    },
    text: {
      color: ColorPallet.primary,
    },
  })
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonStyle} onPress={handlePress}>
        <Text style={[defaultStyles.subtitle, styles.text]}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}
