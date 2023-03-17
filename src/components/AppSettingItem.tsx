import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useTheme } from '../contexts/theme'
import { AppSetting } from '../contexts/types'
import DefaultComponentsThemes from '../defaultComponentsThemes'
import { useTranslation } from 'react-i18next'
import { LanguageList } from "../assets/LanguageList"
import { useStore } from '../contexts/store'

type Props = {
  item: AppSetting
  action: () => void
}

export const AppSettingItem = ({ item, action }: Props) => {
  const defaultStyles = DefaultComponentsThemes()
  const { ColorPallet } = useTheme()
  const [navigate, setNavigate] = useState(true)
  const { i18n } = useTranslation()
  const selectedLanguageCode = i18n.language
  const { t } = useTranslation();
  const languageList = LanguageList(t)
  const [state] = useStore()
  const [defaultValue, setDefaultValue] = useState('')

  useEffect(() => {
    if (item.name == 'langue') {
      const index = languageList.findIndex(langue => langue.code === selectedLanguageCode)
      state.langueApp = languageList[index].label
      item.defaultValue = state.langueApp.toString()
      setDefaultValue(item.defaultValue)
    } else {
      if (item.defaultValue == null) {
        item.defaultValue = ''
      }
      setDefaultValue(item.defaultValue)
    }

    if (item.route == null) {
      setNavigate(false)
    }

  }, [state.langueApp])

  if (!navigate) {
    action = () => void {}
  }
  
  return (
    <TouchableOpacity style={defaultStyles.itemContainer} onPress={action}>
      <View style={defaultStyles.touchableStyle}>
        <View style={defaultStyles.rightSectRowContainer}>
          <Text style={defaultStyles.text}>{item.title}</Text>
        </View>
        <View style={defaultStyles.leftSectRowContainer}>
          <View style={{paddingRight: 5}}>
            <Text style={defaultStyles.text}>{defaultValue}</Text>
          </View>
          {navigate ? (
            <View>
              <Icon name="angle-right" size={20} color={ColorPallet.primaryText} />
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity >
  )
}
