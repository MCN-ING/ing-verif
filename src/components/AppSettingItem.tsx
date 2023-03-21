import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useTheme } from '../contexts/theme'
import { AppSetting } from '../contexts/types'
import DefaultComponentsThemes from '../defaultComponentsThemes'
import { useTranslation } from 'react-i18next'
import { LanguageList } from "../assets/LanguageList"
import { useStore } from '../contexts/store'
import { DispatchAction } from '../contexts/reducers/store'
import { defaultLanguage } from '../constants'

type Props = {
  item: AppSetting
  action: () => void
}

export const AppSettingItem = ({ item, action }: Props) => {
  const defaultStyles = DefaultComponentsThemes()
  const { ColorPallet } = useTheme()
  const [navigate, setNavigate] = useState(true)
  const { i18n, t } = useTranslation()
  const [state] = useStore()
  const selectedLanguageCode = i18n.language
  const languageList = LanguageList(t)

  useEffect(() => {
    if (item.route == null) {
      setNavigate(false)
    }
  }, [state.language])

  if (item.name == 'langue') {
    const index = languageList.findIndex(langue => langue.code === selectedLanguageCode)
    item.defaultValue = index >= 0 ? languageList[index].label : defaultLanguage
  } else {
    if (item.defaultValue == null) {
      item.defaultValue = ''
    }
  }

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
          <View style={{ paddingRight: 5 }}>
            <Text style={defaultStyles.text}>{item.defaultValue}</Text>
          </View>
          {navigate &&
            <View>
              <Icon name="angle-right" size={20} color={ColorPallet.primaryText} />
            </View>}
        </View>
      </View>
    </TouchableOpacity >
  )
}
