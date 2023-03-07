import React from 'react'
import {useTranslation} from 'react-i18next'
import {StyleSheet, Text, View} from 'react-native'

import {useTheme} from '../../contexts/theme'
import DefaultComponentsThemes from '../../defaultComponentsThemes'
import {CustomInputText} from '../CustomInputText'

type Props = {
  requestTitle: string
  setRequestTitle: (value: string) => void
  maxLength?: number
}

export const TitleSection = ({requestTitle, setRequestTitle}: Props) => {
  const {t} = useTranslation()
  const defaultStyles = DefaultComponentsThemes()
  const {ColorPallet} = useTheme()

  const styles = StyleSheet.create({
    detailsTitle: {
      ...defaultStyles.text,
      ...defaultStyles.requestDetailsTitle,
    },
    error: {
      ...defaultStyles.text,
      color: ColorPallet.error,
    },
    containerStyle: {
      borderColor: requestTitle.trim().length > 0 ? ColorPallet.lightGray : ColorPallet.error,
      borderWidth: requestTitle.trim().length > 0 ? 1 : 2,
    },
  })

  return (
    <View>
      <Text style={styles.detailsTitle}>{t('ManageRequests.RequestTitle')}</Text>
      <CustomInputText
        value={requestTitle}
        setValue={setRequestTitle}
        placeholder={t('ManageRequests.TitlePlaceholder')}
        containerStyle={styles.containerStyle}
      />
      {requestTitle.length === 0 && <Text style={styles.error}>{t('Screens.EditRequest.TitleError')}</Text>}
    </View>
  )
}
