import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {StyleSheet, Text, View} from 'react-native'

import {LargeButton} from '../components/LargeButton'
import {Header} from '../components/PageHeader'
import {Spinner} from '../components/Spinner'
import {useTheme} from '../contexts/theme'
import DefaultComponentsThemes from '../defaultComponentsThemes'

export const ValidationLoading = () => {
  const {ColorPallet} = useTheme()
  const {navigate} = useNavigation()
  const {t} = useTranslation()
  const defaultStyles = DefaultComponentsThemes()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: ColorPallet.primaryBackground,
    },
    section: {
      flex: 1,
    },
  })
  return (
    <View style={styles.container}>
      <View style={[styles.section, {justifyContent: 'flex-start'}]}>
        <Header title={t('ValidationLoading.Title')} />
      </View>
      <View style={[styles.section, {justifyContent: 'center'}]}>
        <Spinner />
      </View>
      <View style={[styles.section, {justifyContent: 'center', paddingVertical: 50}]}>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View style={{paddingHorizontal: 10}}>
            <Text style={defaultStyles.text}>{t('ValidationLoading.Footer')}</Text>
          </View>
          <View>
            <LargeButton
              title={t('ValidationLoading.CancelButton')}
              action={() => {
                navigate('QRCode' as never)
              }}
            />
          </View>
        </View>
      </View>
    </View>
  )
}
