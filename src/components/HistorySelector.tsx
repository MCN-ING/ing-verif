import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/Fontisto'
import { HistoryList } from "../assets/HistoryList";
import { defaultHistory } from "../constants";
import { DispatchAction } from "../contexts/reducers/store";
import { useStore } from "../contexts/store";
import { useTheme } from "../contexts/theme";
import defaultComponentsThemes from "../defaultComponentsThemes";
import { LargeButton } from "./LargeButton";



const HistorySelector = () => {
  const { t } = useTranslation()
  const historyList = HistoryList(t)
  const [state, dispatch] = useStore()
  const { ColorPallet } = useTheme()
  const defaultStyles = defaultComponentsThemes()
  const [selectDefaultHistory, setSelectDefaultHistory] = useState(state.history)
  const [updatedSetting, setUpdatedSetting] = useState(false)
  const navigation = useNavigation()

  const setSelectedHistory = (id: string) => {
    setSelectDefaultHistory(id)
    setUpdatedSetting(true)
  }

  const setHistory = (id: string) => {
    setSelectDefaultHistory(id)
    dispatch({
      type: DispatchAction.UPDATE_HISTORY,
      payload: id,
    })
    setSelectDefaultHistory(id)
    navigation.goBack()
  }

  return (

    <ScrollView>
      <View>
        <Text style={[defaultStyles.text]}>{t('History.Body')}</Text>
      </View>
      <View>
        <Text style={defaultStyles.subtitle}>{t('History.Subtitle')}</Text>
      </View>
      {historyList.map((history, index: number) => {
        const selectedHistoric = history.type == selectDefaultHistory
        return (
          <View key={index} >
            <TouchableOpacity style={defaultStyles.itemContainer} onPress={() => setSelectedHistory(history.type)}>
              <View style={defaultStyles.touchableStyle}>
                {selectedHistoric ? (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name={'radio-btn-active'} size={20} color={ColorPallet.primary} />
                    <Text style={[defaultStyles.text, { paddingLeft: 5, fontWeight: 'bold' }]}>{history.label}</Text>
                  </View>
                ) : (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name={'radio-btn-passive'} size={20} color={ColorPallet.primary} />
                    <Text style={[defaultStyles.text, { paddingLeft: 5 }]}>{history.label}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
        )
      })}
      {updatedSetting ? (
        <View style={defaultStyles.buttonsContainer}>
          <LargeButton title={t('SettingsList.SaveSettings')} action={() => setHistory(selectDefaultHistory?.toString()!)} isPrimary={true} />
          <View style={{ height: 10 }} />
          <LargeButton title={t('SettingsList.Cancel')} action={() => navigation.goBack()} />
        </View>
      ) : null}
    </ScrollView>
  )
}

export default HistorySelector;