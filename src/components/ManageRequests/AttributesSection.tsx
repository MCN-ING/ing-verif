import {uuid} from '@aries-framework/core/build/utils/uuid'
import React, {useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import {StyleSheet, Text, View} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

import {AttributesList} from '../../assets/attributesList'
import {useTheme} from '../../contexts/theme'
import DefaultComponentsThemes from '../../defaultComponentsThemes'
import {AddElementButton} from '../AddElementButton'
import {DopdownMenu} from '../DopdownMenu'

type Props = {
  requestAttributes: any[]
  setRequestAttributes: (value: any[]) => void
}

export const AttributesSection = ({requestAttributes, setRequestAttributes}: Props) => {
  const {t} = useTranslation()
  const {ColorPallet} = useTheme()
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

  const styles = StyleSheet.create({
    detailsTitle: {
      ...defaultStyles.text,
      ...defaultStyles.requestDetailsTitle,
    },
    removeIcon: {
      position: 'absolute',
      right: -8,
      bottom: 0,
      top: 8,
      padding: 8,
      zIndex: 2,
    },
  })

  const handleAddAttribute = () => {
    setRequestAttributes([...requestAttributes, {id: uuid(), title: '', raw_name: ''}])
  }

  const handleDeleteAttribute = (id: string) => {
    setRequestAttributes(requestAttributes.filter((attribute) => attribute.id !== id))
  }

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
      <Text style={styles.detailsTitle}>{t('ManageRequests.RequestAttributes')}</Text>
      {requestAttributes.map((attribute) => {
        return (
          <View key={attribute.id}>
            <View style={{maxWidth: '90%'}}>
              <DopdownMenu
                data={attributes}
                setSelectedValue={(key: string) => handleUpdateAttribute(attribute.id, key)}
              />
            </View>
            <View style={styles.removeIcon}>
              <TouchableOpacity onPress={() => handleDeleteAttribute(attribute.id)}>
                <Icon name="close" size={32} color={ColorPallet.darkGray} />
              </TouchableOpacity>
            </View>
          </View>
        )
      })}
      <AddElementButton title={t('ManageRequests.AddAttribute')} handlePress={handleAddAttribute} />
    </View>
  )
}
