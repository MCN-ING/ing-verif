import React from 'react'
import {useTranslation} from 'react-i18next'
import {Text, View} from 'react-native'

import DefaultComponentsThemes from '../../defaultComponentsThemes'
import {AddElementButton} from '../AddElementButton'

type Props = {
  requestAttributes: any[]
  setRequestAttributes: (value: any[]) => void
}

export const AttributesSection = ({requestAttributes, setRequestAttributes}: Props) => {
  const {t} = useTranslation()
  const defaultStyles = DefaultComponentsThemes()

  const handleAddAttribute = () => {
    setRequestAttributes([...requestAttributes, {title: '', value: ''}])
  }

  return (
    <View>
      <Text style={defaultStyles.subtitle}>{t('ManageRequests.RequestAttributes')}</Text>
      {requestAttributes.map((attribute, index) => {
        return (
          <View key={index}>
            <Text>{attribute.title}</Text>
          </View>
        )
      })}
      <AddElementButton title={t('ManageRequests.AddAttribute')} handlePress={handleAddAttribute} />
    </View>
  )
}
