import {uuid} from '@aries-framework/core/build/utils/uuid'
import React, {useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import {Text, View} from 'react-native'

import {AttributesList} from '../../assets/attributesList'
import DefaultComponentsThemes from '../../defaultComponentsThemes'
import {AddElementButton} from '../AddElementButton'
import {DopdownMenu} from '../DopdownMenu'

type Props = {
  requestAttributes: any[]
  setRequestAttributes: (value: any[]) => void
}

export const AttributesSection = ({requestAttributes, setRequestAttributes}: Props) => {
  const {t} = useTranslation()
  const defaultStyles = DefaultComponentsThemes()
  const [attributes, setAttributes] = React.useState<any[]>([])
  const attributesList = AttributesList(t)
  useEffect(() => {
    setAttributes(
      Object.keys(attributesList).map((key) => {
        return {key: key, value: attributesList[key].title}
      })
    )
    handleAddAttribute()
  }, [])

  const handleAddAttribute = () => {
    setRequestAttributes([...requestAttributes, {id: uuid(), title: '', raw_name: ''}])
  }

  /*
    // TODO : delete attribute
    const handleDeleteAttribute = (id: string) => {
      setRequestAttributes(requestAttributes.filter((attribute) => attribute.id !== id))
    }
  */

  const handleUpdateAttribute = (id: string, key: string) => {
    setRequestAttributes(
      requestAttributes.map((attribute) => {
        if (attribute.id === id) {
          return {
            ...attribute,
            raw_name: key,
            title: attributesList[key].title,
            specific: {
              type: attributesList[key].type,
              value: attributesList[key].defaultValue,
              operator: attributesList[key].operator,
            },
          }
        }
        return attribute
      })
    )
  }

  return (
    <View>
      <Text style={defaultStyles.subtitle}>{t('ManageRequests.RequestAttributes')}</Text>
      {requestAttributes.map((attribute) => {
        return (
          <View key={attribute.id}>
            <DopdownMenu
              data={attributes}
              setSelectedValue={(key: string) => handleUpdateAttribute(attribute.id, key)}
            />
          </View>
        )
      })}
      <AddElementButton title={t('ManageRequests.AddAttribute')} handlePress={handleAddAttribute} />
    </View>
  )
}
