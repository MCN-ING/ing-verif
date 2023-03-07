import React, {ReactNode} from 'react'
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'

import {useTheme} from '../../contexts/theme'
import DefaultComponentsThemes from '../../defaultComponentsThemes'
import {Separator} from '../Separator'

interface Props {
  containerStyle?: StyleProp<ViewStyle>
  sectionLabel: string
  children: ReactNode
  action?: () => void
  actionLabel: string
}

export const RequestDetailItem = ({sectionLabel, children, containerStyle, action, actionLabel}: Props) => {
  const defaultStyles = DefaultComponentsThemes()
  const {ColorPallet} = useTheme()

  const styles = StyleSheet.create({
    detailsTitle: {
      ...defaultStyles.text,
      ...defaultStyles.requestDetailsTitle,
      marginBottom: 10,
    },
    detailsDescription: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    attributePredicate: {
      ...defaultStyles.text,
      ...defaultStyles.requestDetailsBody,
      ...defaultStyles.attributePredicate,
    },
  })

  return (
    <View style={containerStyle}>
      <View style={[styles.detailsDescription, {marginBottom: 10}]}>
        <Text style={defaultStyles.requestDetailsTitle}>{sectionLabel}</Text>
        <TouchableOpacity onPress={action} style={{padding: 8}}>
          <Text style={defaultStyles.link}>{actionLabel}</Text>
        </TouchableOpacity>
      </View>
      {children}
      <Separator color={ColorPallet.darkGray} />
    </View>
  )
}
