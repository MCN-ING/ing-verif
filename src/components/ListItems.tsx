import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

import {useTheme} from '../contexts/theme'
import DefaultComponentsThemes from '../defaultComponentsThemes'

interface Props {
  item: any
  key: number
}

export const ListItems = (props: Props) => {
  const {ColorPallet} = useTheme()
  const defaultStyles = DefaultComponentsThemes()
  const navigation = useNavigation()

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.touchableStyle}
        onPress={() => {
          navigation.navigate('QRCode' as never)
        }}>
        <View style={styles.elements}>
          <Text style={defaultStyles.text}>{props.item.name}</Text>
        </View>
        <View style={[styles.elements, {alignItems: 'flex-end'}]}>
          <Icon name="angle-right" size={24} color={ColorPallet.primaryText} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 75,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.2,
    borderBottomStyle: 'solid',
  },
  touchableStyle: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
  },
  elements: {
    flex: 1,
  },
})
