import React from 'react'
import {StyleSheet, Text} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'

import {useTheme} from '../contexts/theme'

interface Props {
  isPrimary?: boolean
  color?: string
  title: string
  action: () => void
  disabled?: boolean
}

export const LargeButton = ({title, action, color, isPrimary = false, disabled = false}: Props) => {
  const {ColorPallet} = useTheme()

  let backgroundColor = ColorPallet.primary
  let borderColor = ColorPallet.primary
  let textColor = ColorPallet.white

  if (isPrimary) {
    if (color) {
      backgroundColor = color
      borderColor = color
    }
  } else {
    if (color) {
      backgroundColor = ColorPallet.white
      borderColor = color
      textColor = color
    } else {
      backgroundColor = ColorPallet.primaryBackground
      textColor = ColorPallet.primary
    }
  }

  const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: backgroundColor,
      borderRadius: 5,
      marginHorizontal: 10,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      borderWidth: 2,
      borderColor: borderColor,
      borderStyle: 'solid',
    },
    textStyles: {
      fontWeight: 'bold',
      color: textColor,
      fontSize: 16,
    },
  })
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={action} disabled={disabled}>
      <Text style={styles.textStyles}>{title}</Text>
    </TouchableOpacity>
  )
}
