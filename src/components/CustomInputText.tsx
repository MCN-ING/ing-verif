import React from 'react'
import {StyleSheet, TextInput, View, ViewStyle} from 'react-native'

import {useTheme} from '../contexts/theme'

type Props = {
  value: string
  setValue: (value: string) => void
  placeholder?: string
  multiline?: boolean
  containerStyle?: ViewStyle
}

export const CustomInputText = ({value, setValue, placeholder, containerStyle, multiline = false}: Props) => {
  const {ColorPallet} = useTheme()
  const styles = StyleSheet.create({
    container: {
      minHeight: 20,
      marginVertical: 10,
      paddingHorizontal: 5,
      borderWidth: 2,
      borderColor: ColorPallet.lightGray,
      borderRadius: 4,
    },
    input: {
      flex: 1,
      textAlignVertical: 'top',
      fontSize: 16,
      height: '100%',
    },
  })
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        multiline={multiline}
        blurOnSubmit={false}
      />
    </View>
  )
}
