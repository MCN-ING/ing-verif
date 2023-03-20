import React from 'react'
import {useTranslation} from 'react-i18next'
import {StyleSheet, Text, View, ViewStyle} from 'react-native'

import DefaultComponentsThemes from '../../defaultComponentsThemes'
import {CustomInputText} from '../CustomInputText'

type Props = {
  requestTitle: string
  setRequestTitle: (value: string) => void
  containerStyles?: ViewStyle
}

export const TitleSection = ({requestTitle, setRequestTitle, containerStyles}: Props) => {
  const {t} = useTranslation()
  const defaultStyles = DefaultComponentsThemes()
  const styles = StyleSheet.create({
    detailsTitle: {
      ...defaultStyles.text,
      ...defaultStyles.requestDetailsTitle,
    },
  })

  return (
    <View>
      <Text style={styles.detailsTitle}>{t('ManageRequests.RequestTitle')}</Text>
      <CustomInputText
        value={requestTitle}
        setValue={setRequestTitle}
        placeholder={t('ManageRequests.TitlePlaceholder')}
        containerStyle={containerStyles}
      />
    </View>
  )
}
