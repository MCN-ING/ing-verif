import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/Fontisto'
import { LanguageList } from "../assets/LanguageList";
import { useStore } from "../contexts/store";
import { useTheme } from "../contexts/theme";
import defaultComponentsThemes from "../defaultComponentsThemes";
import { LargeButton } from "./LargeButton";



const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const selectedLanguageCode = i18n.language
  const { ColorPallet } = useTheme()
  const defaultStyles = defaultComponentsThemes()
  const languageList = LanguageList(t)
  const [state] = useStore()
  const navigation = useNavigation()
  const [languageCode, setLanguageCode] = useState('')
  const [updatedSetting, setUpdatedSetting] = useState(false)

  const setLanguage = (label: string | undefined) => {
    const index = languageList.findIndex(langue => langue.label === label)
    state.langueApp = label
    return i18n.changeLanguage(languageList[index].code);
  };

  const setSelectedLanguage = (code: string) => {
    const index = languageList.findIndex(langue => langue.code === code)
    state.langueApp = languageList[index].label
    setUpdatedSetting(true)
    setLanguageCode(code)
  };

  useEffect(() => {
    if (state.langueApp == null){
      state.langueApp = selectedLanguageCode
      setLanguageCode(state.langueApp.toString())
    }
  }, [state.langueApp])
  return (

    <ScrollView>
      {languageList.map((language, index: number) => {
        const selectedLanguage = language.code === languageCode;
        return (
          <View key={index} >
            <TouchableOpacity style={defaultStyles.itemContainer} onPress={() => setSelectedLanguage(language.code)}>
              <View style={defaultStyles.touchableStyle}>
                {selectedLanguage ? (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name={'radio-btn-active'} size={20} color={ColorPallet.primary} />
                    <Text style={[defaultStyles.text, { paddingLeft: 5, fontWeight: 'bold' }]}>{language.label}</Text>
                  </View>
                ) : (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name={'radio-btn-passive'} size={20} color={ColorPallet.primary} />
                    <Text style={[defaultStyles.text, { paddingLeft: 5 }]}>{language.label}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
        )
      })}
      {updatedSetting ? (
      <View style={defaultStyles.buttonsContainer}>
        <LargeButton title={t('SettingsList.SaveSettings')} action={() => setLanguage(state.langueApp?.toString())} isPrimary={true} />
        <View style={{ height: 10 }} />
        <LargeButton title={t('SettingsList.Cancel')} action={() => navigation.goBack()} />
      </View>
      ) : null}
    </ScrollView>
  )
}

export default LanguageSelector;