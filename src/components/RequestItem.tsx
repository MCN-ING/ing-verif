import React, {useState} from 'react'
import {Pressable, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native'
import {Swipeable} from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

import {useTheme} from '../contexts/theme'
import {Request} from '../contexts/types'
import DefaultComponentsThemes from '../defaultComponentsThemes'

type Props = {
  item: Request
  action: () => void
  onDelete?: () => void
  isManaged?: boolean
}

export const RequestItem = ({item, action, onDelete, isManaged = false}: Props) => {
  const defaultStyles = DefaultComponentsThemes()
  const {ColorPallet} = useTheme()
  const [borderRadius, setBorderRadius] = useState(4)

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
      shadowOffset: {width: 0, height: 1},
      shadowRadius: 4,
      shadowOpacity: 0.24,
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      borderTopRightRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
    },
    containerManaged: {
      borderWidth: 3,
      paddingTop: 24,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: ColorPallet.primary,
      shadowColor: ColorPallet.secondary,
    },
    deleteContainer: {
      marginVertical: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingVertical: 50,
      paddingHorizontal: 34,
      backgroundColor: ColorPallet.error,
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

  const RightSwipeActions = () => {
    return (
      <Pressable onPress={onDelete} style={({pressed}) => [styles.deleteContainer, pressed && {opacity: 0.8}]}>
        <FontAwesomeIcon name="trash" size={24} color={ColorPallet.white} />
      </Pressable>
    )
  }

  const onSwipeRightHandler = () => {
    setBorderRadius(0)
  }

  const onSwipeCloseHandler = () => {
    setBorderRadius(4)
  }

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
      <Swipeable
        renderRightActions={RightSwipeActions}
        onSwipeableRightOpen={onSwipeRightHandler}
        onSwipeableClose={onSwipeCloseHandler}>
        <TouchableWithoutFeedback onPress={action}>
          <View style={styles.container}>
            <View style={styles.requestCard}>
              <Text style={[defaultStyles.text, styles.requestText, styles.requestTitle]}>{item.title}</Text>
              <Text style={[defaultStyles.note, styles.requestText]}>{item.description}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Swipeable>
    )
  }

  return content
}
