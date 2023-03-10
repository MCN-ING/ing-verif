import {uuid} from '@aries-framework/core/build/utils/uuid'
import {useTranslation} from 'react-i18next'

import {Attribute, lightAttributeDetails, Predicate} from '../contexts/types'

export const requestAttributesToLightAttributesDetail = (
  attributes?: Attribute,
  predicates?: Predicate
): lightAttributeDetails[] => {
  const {t} = useTranslation()
  const lightAttributeDetails: lightAttributeDetails[] = []
  if (attributes) {
    Object.keys(attributes).map((key) => {
      lightAttributeDetails.push({
        id: uuid(),
        title: t(`Attributes.${key}`),
        raw_name: key,
        specific: {
          type: 'Attribute',
        },
      })
    })
  }

  if (predicates) {
    Object.keys(predicates).map((key) => {
      lightAttributeDetails.push({
        id: uuid(),
        title: t(`Attributes.${key}`),
        raw_name: key,
        specific: {
          type: 'Predicate',
          value: predicates[key].predicateValue,
          operator: predicates[key].predicateType,
        },
      })
    })
  }
  return lightAttributeDetails
}
