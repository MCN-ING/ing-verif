import React from 'react'
import {useTranslation} from 'react-i18next'
import {View} from 'react-native'

import {HorizontalSlider} from '../components/HorizontalSlider/HorizontalSlider'
import {ItemInfo} from '../components/HorizontalSlider/SliderItem'
import {Header} from '../components/PageHeader'
import DefaultComponentsThemes from '../defaultComponentsThemes'

import {ActivityLog} from './ActivityLog'

export const Home = () => {
  const {t} = useTranslation()
  const styles = DefaultComponentsThemes()

  const items = [
    {id: 0, title: t('Home.Slider.Title1'), body: t('Home.Slider.Body1'), action: 'Requests'} as ItemInfo,
    {id: 1, title: t('Home.Slider.Title2'), body: t('Home.Slider.Body2'), action: 'Requests'} as ItemInfo,
    {id: 2, title: t('Home.Slider.Title3'), body: t('Home.Slider.Body3'), action: 'Requests'} as ItemInfo,
  ]
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
