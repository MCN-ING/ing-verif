import React from 'react'
import {useTranslation} from 'react-i18next'
import {StyleSheet, Text, View} from 'react-native'

import DefaultComponentsThemes from '../../defaultComponentsThemes'
import {CustomInputText} from '../CustomInputText'

type Props = {
  requestDescription: string
  setRequestDescription: (value: string) => void
  maxLength?: number
}

export const DescriptionSection = ({
  requestDescription: requestTitle,
  setRequestDescription: setRequestTitle,
  maxLength,
}: Props) => {
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
      <Text style={styles.detailsTitle}>{t('ManageRequests.RequestDescription')}</Text>
      <CustomInputText
        value={requestTitle}
        setValue={setRequestTitle}
        placeholder={t('ManageRequests.DescriptionPlaceholder')}
        containerStyle={{minHeight: 100}}
        maxLength={maxLength}
        multiline={true}
      />
    </View>
  )
}
