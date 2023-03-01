// import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import {useTheme} from '../contexts/theme'
import {Request} from '../contexts/types'
import DefaultComponentsThemes from '../defaultComponentsThemes'

type Props = {
  item: Request
  action: () => void
  isManaged?: boolean
}

export const RequestItem = ({item, action, isManaged = false}: Props) => {
  const defaultStyles = DefaultComponentsThemes()
  // const [, dispatch] = useStore()
  const {ColorPallet} = useTheme()
  // const {navigate} = useNavigation()

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
      borderRadius: 4,
    },
    containerManaged: {
      borderWidth: 3,
      paddingTop: 24,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: ColorPallet.primary,
      shadowColor: ColorPallet.secondary,
    },
    textManaged: {
      color: ColorPallet.primary,
      textAlign: 'center',
    },
    requestCard: {
      alignSelf: 'center',
    },
    requestText: {
      paddingBottom: 16,
      lineHeight: 24,
    },
    requestTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      color: ColorPallet.primaryText,
    },
  })

  let content = (
    <TouchableOpacity style={[styles.container, styles.containerManaged]} onPress={action}>
      <View style={[styles.requestCard, {flex: 2}]}>
        <Text style={[defaultStyles.text, styles.requestTitle, styles.textManaged]}>{item.title}</Text>
      </View>
      <Icon name="arrowright" size={24} color={ColorPallet.primary} />
    </TouchableOpacity>
  )

  if (isManaged) {
    content = (
      <TouchableOpacity style={styles.container} onPress={action}>
        <View style={styles.requestCard}>
          <Text style={[defaultStyles.text, styles.requestText, styles.requestTitle]}>{item.title}</Text>
          <Text style={[defaultStyles.note, styles.requestText]}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return content
}
