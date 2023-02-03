import {t} from 'i18next'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {StyleSheet, Text, View} from 'react-native'

import DefaultComponentsThemes from '../defaultComponentsThemes'

export const ActivityLog = () => {
  const {t} = useTranslation()
  const defaultStyle = DefaultComponentsThemes()
  const [activities, setActivities] = React.useState([])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      minWidth: '100%',
      textAlign: 'left',
      justifyContent: 'flex-start',
      paddingHorizontal: 10,
    },
  })

  return (
    <View style={styles.container}>
      <Text style={defaultStyle.title}>
        {activities.length < 1 ? t('ActivityLog.Title') : t('ActivityLog.EmptyTitle')}
      </Text>
      <View style={{paddingTop: 15}}>
        {activities.length < 1 && <Text style={defaultStyle.text}>{t('ActivityLog.EmptyBody')}</Text>}
      </View>
    </View>
  )
}
