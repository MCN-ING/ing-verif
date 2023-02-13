import React, {useState} from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import {hiddenField} from '../constants'
import {useTheme} from '../contexts/theme'
import DefaultComponentsThemes from '../defaultComponentsThemes'

interface Props {
  name: string
  value: string
}

export const Attributes = ({name, value}: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const defaultStyles = DefaultComponentsThemes()
  const {ColorPallet} = useTheme()

  const styles = StyleSheet.create({
    AttributeContainer: {
      width: '100%',
      justifyContent: 'flex-start',
      paddingVertical: 10,
      broderBottomWidth: 1,
      borderColor: ColorPallet.lightGray,
      borderStyle: 'solid',
    },
    AttributesValueContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })

  return (
    <View style={styles.AttributeContainer}>
      <Text style={(defaultStyles.text, [{color: ColorPallet.darkGray, fontSize: 16}])}>{name}</Text>
      <View style={styles.AttributesValueContainer}>
        <Text style={defaultStyles.text}>{isVisible ? value : hiddenField}</Text>
        <TouchableOpacity style={{padding: 5}} onPress={() => setIsVisible(!isVisible)}>
          <Icon name={isVisible ? 'eye' : 'eye-slash'} size={25} color={ColorPallet.primaryText} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
