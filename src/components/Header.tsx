import React from 'react'
import {Text, View, StyleSheet, SafeAreaView} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

import {useTheme} from '../contexts/theme'
import DefaultComponentsThemes from '../defaultComponentsThemes'
interface Props {
  title: string
  shownSettings: boolean
}

export const Header = (props: Props) => {
  const {ColorPallet} = useTheme()
  const defaultTheme = DefaultComponentsThemes()
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flex: 1,
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: ColorPallet.primaryBackground,
      maxHeight: 50,
    },
    elements: {
      flex: 1,
      minWidth: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.elements} />
      <View style={styles.elements}>
        <Text style={[defaultTheme.text, defaultTheme.title]}>{props.title}</Text>
      </View>
      <View style={[styles.elements, {alignItems: 'flex-end', paddingRight: 15}]}>
        <TouchableOpacity>
          <Icon name="cog" size={24} color={ColorPallet.primaryText} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
