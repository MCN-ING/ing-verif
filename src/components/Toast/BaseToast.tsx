import React from 'react'
import {View, Text, useWindowDimensions, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import {useTheme} from '../../contexts/theme'
import DefaultComponentsThemes from '../../defaultComponentsThemes'

interface BaseToastProps {
  title?: string
  body?: string
  toastType: string
  onPress?: () => void
  onShow?: React.FC
  onHide?: React.FC
}

export enum ToastType {
  Success = 'success',
  Info = 'info',
  Warn = 'warn',
  Error = 'error',
}

const BaseToast: React.FC<BaseToastProps> = ({title, body, toastType, onPress = () => null}) => {
  const {ColorPallet} = useTheme()
  const defaultStyle = DefaultComponentsThemes()

  const {width} = useWindowDimensions()
  const iconSize = 24
  let iconName = ''
  let backgroundColor = ''
  let borderColor = ''
  let iconColor = ''
  let textColor = ''
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      flexDirection: 'row',
      marginTop: 25,
      borderWidth: 1,
      borderRadius: 4,
    },
    textContainer: {
      flexShrink: 1,
      marginVertical: 15,
      marginRight: 10,
    },
    icon: {
      marginTop: 15,
      marginHorizontal: 15,
    },
    title: {
      fontWeight: 'bold',
    },
    body: {
      marginTop: 10,
    },
  })
  switch (toastType) {
    case ToastType.Success:
      iconName = 'checkcircle'
      backgroundColor = ColorPallet.notification.success
      borderColor = ColorPallet.notification.successBorder
      iconColor = ColorPallet.notification.successIcon
      textColor = ColorPallet.notification.successText
      break

    case ToastType.Info:
      iconName = 'infocirlceo'
      backgroundColor = ColorPallet.notification.info
      borderColor = ColorPallet.notification.infoBorder
      iconColor = ColorPallet.notification.infoIcon
      textColor = ColorPallet.notification.infoText
      break

    case ToastType.Warn:
      iconName = 'warning'
      backgroundColor = ColorPallet.notification.warn
      borderColor = ColorPallet.notification.warnBorder
      iconColor = ColorPallet.notification.warnIcon
      textColor = ColorPallet.notification.warnText
      break

    case ToastType.Error:
      iconName = 'closecircleo'
      backgroundColor = ColorPallet.notification.error
      borderColor = ColorPallet.notification.errorBorder
      iconColor = ColorPallet.notification.errorIcon
      textColor = ColorPallet.notification.errorText
      break

    default:
      throw new Error('ToastType was not set correctly.')
  }

  return (
    <TouchableOpacity activeOpacity={1} onPress={() => onPress()}>
      <View style={[styles.container, {backgroundColor, borderColor, width: width - width * 0.1}]}>
        <Icon style={[styles.icon]} name={iconName} color={iconColor} size={iconSize} />
        <View style={[styles.textContainer]}>
          <Text style={[defaultStyle.subtitle, {color: textColor}]}>{title}</Text>
          <Text style={[defaultStyle.text, {color: textColor}]}>{body}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default BaseToast
