import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {View} from 'react-native'

import {HorizontalSlider} from '../components/HorizontalSlider/HorizontalSlider'
import {ItemInfo} from '../components/HorizontalSlider/SliderItem'
import {Header} from '../components/PageHeader'
import {useStore} from '../contexts/store'
import DefaultComponentsThemes from '../defaultComponentsThemes'

import {ActivityLog} from './ActivityLog'

export const Home = () => {
  const {t} = useTranslation()
  const styles = DefaultComponentsThemes()
  const [items, setItems] = useState<ItemInfo[]>([])
  const [state] = useStore()

  useEffect(() => {
    if (state.proofRequest) {
      setItems([
        {id: 0, title: state.proofRequest.title, body: state.proofRequest.description, action: 'QRCode'} as ItemInfo,
        {id: 1, title: t('Home.Slider.Title2'), action: 'Requests'} as ItemInfo,
      ])
    } else {
      setItems([
        {id: 0, title: t('Home.Slider.Title1'), action: 'Requests'} as ItemInfo,
        {id: 1, title: t('Home.Slider.Title2'), action: 'Requests'} as ItemInfo,
      ])
    }
  }, [state.proofRequest])

  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
        <Header title={t('Home.Title')} />
        <HorizontalSlider items={items} />
      </View>
      <View style={{flex: 3}}>
        <ActivityLog />
      </View>
    </View>
  )
}
