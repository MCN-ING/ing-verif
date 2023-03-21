import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import {useTheme} from '../contexts/theme'
import {Setting} from '../contexts/types'
import DefaultComponentsThemes from '../defaultComponentsThemes'

type Props = {
  item: Setting
  action: () => void
}

export const SettingItem = ({item, action}: Props) => {
  const defaultStyles = DefaultComponentsThemes()
  const {ColorPallet} = useTheme()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: 24,
      paddingBottom: 24,
      paddingTop: 32,
      marginVertical: 5,
      elevation: 3,
      backgroundColor: ColorPallet.white,
      borderColor: ColorPallet.lightGray,
      borderWidth: 1,
      shadowColor: ColorPallet.lightGray,
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.24,
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
    },
    containerManaged: {
      borderWidth: 3,
      paddingTop: 24,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: ColorPallet.primary,
      shadowColor: ColorPallet.secondary,
    },
    settingCard: {
      alignSelf: 'center',
      flex: 2,
    },
    settingTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      color: ColorPallet.primary,
      textAlign: 'center',
    },
  })

  let content = (
    <TouchableOpacity style={[styles.container, styles.containerManaged]} onPress={action}>
      <View style={styles.settingCard}>
        <Text style={[defaultStyles.text, styles.settingTitle]}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )

  return content
}
