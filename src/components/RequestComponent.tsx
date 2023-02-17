import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import {DispatchAction} from '../contexts/reducers/store'
import {useStore} from '../contexts/store'
import {useTheme} from '../contexts/theme'
import {Request} from '../contexts/types'
import DefaultComponentsThemes from '../defaultComponentsThemes'

type itemProps = {
  item: {
    title: string
    description: string
    attributes: any
    predicate: any
  }
}

export const RequestComponent = ({item}: itemProps) => {
  const defaultStyles = DefaultComponentsThemes()
  const [, dispatch] = useStore()
  const {ColorPallet} = useTheme()
  const {navigate} = useNavigation()

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '90%',
      height: 50,
      paddingVertical: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: ColorPallet.lightGray,
      borderStyle: 'solid',
      alignSelf: 'center',
    },
  })

  const handleSelection = () => {
    dispatch({
      type: DispatchAction.PROOF_REQUEST_CHANGED,
      payload: item as never as Request,
    })
    navigate('QRCode' as never)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleSelection}>
      <Text style={defaultStyles.text}>{item.title}</Text>
      <Icon name="arrow-right" size={20} color={ColorPallet.primaryText} />
    </TouchableOpacity>
  )
}
