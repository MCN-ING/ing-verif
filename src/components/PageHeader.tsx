import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

import {useTheme} from '../contexts/theme'
import DefaultComponentsThemes from '../defaultComponentsThemes'
interface Props {
  title: string
}

export const Header = (props: Props) => {
  const {ColorPallet} = useTheme()
  const defaultTheme = DefaultComponentsThemes()
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '100%',
      padding: 10,
    },
    titleContainer: {
      textAlign: 'flex-start',
      paddingVertical: 5,
    },
    titleHighlight: {
      backgroundColor: ColorPallet.titleHighlight,
      minWidth: 50,
      minHeight: 5,
    },
  })

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[defaultTheme.title, {color: ColorPallet.primaryText}]}>{props.title}</Text>
      </View>
      <View style={styles.titleHighlight} />
    </View>
  )
}
