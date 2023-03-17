import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import { SettingsList } from '../assets/SettingsList'
import {SettingItem} from '../components/SettingItem'
import {useStore} from '../contexts/store'
import {Setting} from '../contexts/types'

export const Settings = () => {
  const [state] = useStore()
  const {t} = useTranslation()
  const {navigate} = useNavigation()
  const settings = SettingsList(t)

  function handleSelection(item: Setting) {
    navigate(item.route as never)
  }

  const styles = StyleSheet.create({
    headerFooterStyle: {
      width: '100%',
      height: 45,
    },
    textStyle: {
      fontSize: 16,
      padding: 7,
    },
  });

  return (
    <View style={{justifyContent: 'center', alignContent: 'center', flex: 1}}>
      <ScrollView style={{padding: 10}}>
        {settings.map((item: Setting, index: number) => {
          return <SettingItem key={index.toString()} item={item} action={() => handleSelection(item)} />
        })}
      </ScrollView>
      <View style={styles.headerFooterStyle}>
        <Text style={styles.textStyle}>{'\u00A9'} {t('Footer.Title')}</Text>
      </View>
    </View>
  )
}
