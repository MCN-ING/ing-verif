import React from 'react'
import {useTranslation} from 'react-i18next'
import {Text, View} from 'react-native'

import DefaultComponentsThemes from '../../defaultComponentsThemes'
import {CustomInputText} from '../CustomInputText'

type Props = {
  requestTitle: string
  setRequestTitle: (value: string) => void
}

export const TitleSection = ({requestTitle, setRequestTitle}: Props) => {
  const {t} = useTranslation()
  const defaultStyles = DefaultComponentsThemes()
  return (
    <View>
      <Text style={defaultStyles.subtitle}>{t('ManageRequests.RequestTitle')}</Text>
      <CustomInputText
        value={requestTitle}
        setValue={setRequestTitle}
        placeholder={t('ManageRequests.TitlePlaceholder')}
      />
    </View>
  )
}
