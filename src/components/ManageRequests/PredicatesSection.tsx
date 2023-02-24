import React from 'react'
import {useTranslation} from 'react-i18next'
import {Text, View} from 'react-native'

import DefaultComponentsThemes from '../../defaultComponentsThemes'
import {AddElementButton} from '../AddElementButton'

type Props = {
  requestPredicates: any[]
  setRequestPredicates: (value: any[]) => void
}

export const PredicatesSection = ({requestPredicates, setRequestPredicates}: Props) => {
  const {t} = useTranslation()
  const defaultStyles = DefaultComponentsThemes()

  const handleAddAttribute = () => {
    setRequestPredicates([...requestPredicates, {title: '', value: ''}])
  }

  return (
    <View>
      <Text style={defaultStyles.subtitle}>{t('ManageRequests.RequestAttributes')}</Text>
      {requestPredicates.map((attribute, index) => {
        return (
          <View key={index}>
            <Text>{attribute.title}</Text>
          </View>
        )
      })}
      <AddElementButton title={t('ManageRequests.AddPredicates')} handlePress={handleAddAttribute} />
    </View>
  )
}
