import { isDebuggerStatement } from "@babel/types";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/Fontisto'
import { HistoricList } from "../assets/HistoricList";
import { useStore } from "../contexts/store";
import { useTheme } from "../contexts/theme";
import defaultComponentsThemes from "../defaultComponentsThemes";
import { LargeButton } from "./LargeButton";



const HistoricSelector = () => {
  const { t } = useTranslation()
  const historicList = HistoricList(t)
  const [state] = useStore()
  const { ColorPallet } = useTheme()
  const defaultStyles = defaultComponentsThemes()
  const [selectDefaultHistory, setSelectDefaultHistory] = useState(state.history?.toString()!)
  const [updatedSetting, setUpdatedSetting] = useState(false)
  const navigation = useNavigation()

  const setSelectedHistoric = (id: string) => {
    setSelectDefaultHistory(id)
    setUpdatedSetting(true)
    state.history = id
  }

  const setHistoric = () => {
    setSelectDefaultHistory(state.history?.toString()!)
  }
  useEffect(() => {
    if (state.history==null){
      state.history = '3'
    }
  }, [state.history])

  return (

    <ScrollView>
      <View>
        <Text style={[defaultStyles.text]}>{t('Historic.Body')}</Text>
      </View>
      <View>
        <Text style={defaultStyles.subtitle}>{t('Historic.Subtitle')}</Text>
      </View>
      {historicList.map((historic, index: number) => {
        const selectedHistoric = historic.id == selectDefaultHistory
        return (
          <View key={index} >
            <TouchableOpacity style={defaultStyles.itemContainer} onPress={() => setSelectedHistoric(historic.id)}>
              <View style={defaultStyles.touchableStyle}>
                {selectedHistoric ? (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name={'radio-btn-active'} size={20} color={ColorPallet.primary} />
                    <Text style={[defaultStyles.text, { paddingLeft: 5, fontWeight: 'bold' }]}>{historic.label}</Text>
                  </View>
                ) : (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name={'radio-btn-passive'} size={20} color={ColorPallet.primary} />
                    <Text style={[defaultStyles.text, { paddingLeft: 5 }]}>{historic.label}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>

          </View>
        )
      })}
      {updatedSetting ? (
        <View style={defaultStyles.buttonsContainer}>
          <LargeButton title={t('SettingsList.SaveSettings')} action={() => setHistoric()} isPrimary={true} />
          <View style={{ height: 10 }} />
          <LargeButton title={t('SettingsList.Cancel')} action={() => navigation.goBack()} />
        </View>
      ) : null}
    </ScrollView>
  )
}

export default HistoricSelector;