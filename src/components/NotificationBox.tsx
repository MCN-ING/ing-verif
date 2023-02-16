import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import {useTheme} from '../contexts/theme'
import DefaultComponentsThemes from '../defaultComponentsThemes'

interface Props {
  type: 'checkcircle' | 'warning'
  title?: string
  body: string
}

export const NotificationBox = ({type, title, body}: Props) => {
  const {ColorPallet} = useTheme()
  const defaultTheme = DefaultComponentsThemes()

  let bgColorPallet = ''
  if (type == 'checkcircle') {
    bgColorPallet = ColorPallet.success
  } else {
    bgColorPallet = ColorPallet.warning
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      borderRadius: 5,
      borderColor: ColorPallet.lightGray,
      borderWidth: 1,
      borderStyle: 'solid',
      overflow: 'hidden',
    },

    leftSection: {
      height: '100%',
      flex: 1,
      paddingVertical: 20,
      alignItems: 'center',
      backgroundColor: bgColorPallet,
    },
    rightSection: {
      height: '100%',
      flex: 5,
      paddingVertical: 20,
      padding: 10,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  })

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Icon name={type} size={25} color={ColorPallet.white} />
      </View>
      <View style={styles.rightSection}>
        {title && <Text style={[defaultTheme.text, {fontWeight: 'bold'}]}>{title}</Text>}
        <Text style={defaultTheme.text}>{body}</Text>
      </View>
    </View>
  )
}
