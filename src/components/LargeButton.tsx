import React from 'react'
import {StyleSheet, Text} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'

import {useTheme} from '../contexts/theme'

interface Props {
  isPrimary?: boolean
  title: string
  action: () => void
  disabled?: boolean
}

export const LargeButton = ({title, action, isPrimary = false, disabled = false}: Props) => {
  const {ColorPallet} = useTheme()

  const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: isPrimary ? ColorPallet.primary : ColorPallet.primaryBackground,
      borderRadius: 5,
      marginHorizontal: 10,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      borderWidth: 2,
      borderColor: ColorPallet.primary,
      borderStyle: 'solid',
    },
    textStyles: {
      fontWeight: 'bold',
      color: isPrimary ? ColorPallet.white : ColorPallet.primary,
      fontSize: 16,
    },
  })
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={action} disabled={disabled}>
      <Text style={styles.textStyles}>{title}</Text>
    </TouchableOpacity>
  )
}
