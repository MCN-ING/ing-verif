import React from 'react'
import {useTranslation} from 'react-i18next'
import {Text, View} from 'react-native'

import DefaultComponentsThemes from '../../defaultComponentsThemes'
import {CustomInputText} from '../CustomInputText'

type Props = {
  requestDescription: string
  setRequestDescription: (value: string) => void
}

export const DescriptionSection = ({
  requestDescription: requestTitle,
  setRequestDescription: setRequestTitle,
}: Props) => {
  const {t} = useTranslation()
  const defaultStyles = DefaultComponentsThemes()

  return (
    <View>
      <Text style={defaultStyles.subtitle}>{t('ManageRequests.RequestDescription')}</Text>
      <CustomInputText
        value={requestTitle}
        setValue={setRequestTitle}
        placeholder={t('ManageRequests.DescriptionPlaceholder')}
        containerStyle={{minHeight: 100}}
        multiline={true}
      />
    </View>
  )
}
