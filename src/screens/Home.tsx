import React from 'react'
import {useTranslation} from 'react-i18next'
import {View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import {Header} from '../components/Header'
import {SchemaSection} from '../components/SchemaSection'
import DefaultComponentsThemes from '../defaultComponentsThemes'

export const Home = () => {
  const {t} = useTranslation()
  const styles = DefaultComponentsThemes()

  const items = [
    {id: 1, name: 'Vérification 1'},
    {id: 2, name: 'Vérification 2'},
    {id: 3, name: 'Vérification 3'},
    {id: 4, name: 'Vérification 4'},
  ]
  return (
    <SafeAreaView style={styles.container}>
      <Header title={t('welcome')} shownSettings={true} />
      <View style={styles.container}>
        <SchemaSection title={t('sections.schema')} items={items} />
      </View>
    </SafeAreaView>
  )
}
