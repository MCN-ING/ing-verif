import React from 'react'
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

import {useTheme} from '../../contexts/theme'
import DefaultComponentsThemes from '../../defaultComponentsThemes'
import {Separator} from '../Separator'

interface Props {
  containerStyle?: StyleProp<ViewStyle>
  sectionLabel: string
  sectionDescription: string
  action?: () => void
}

export const RequestDetailItem = ({sectionLabel, sectionDescription, containerStyle, action}: Props) => {
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
      <Text style={styles.detailsTitle}>{sectionLabel}</Text>
      <TouchableOpacity style={styles.detailsDescription} onPress={action}>
        <Text style={[defaultStyles.text, {flex: 9}]}>{sectionDescription}</Text>
        <Icon name="chevron-forward" size={24} style={{flex: 1, textAlign: 'right'}} />
      </TouchableOpacity>
      <Separator color={ColorPallet.darkGray} />
    </View>
  )
}
