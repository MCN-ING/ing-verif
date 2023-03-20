import {PredicateType} from '@aries-framework/core'
import {TFunction} from 'i18next'

import {attributeType} from '../constants'
import {AttributeDetails} from '../contexts/types'

export const AttributesList = (t: TFunction<'translation', undefined, 'translation'>): AttributeDetails => {
  return {
    given_names: {
      title: t('Attributes.given_names'),
      type: attributeType.ATTRIBUTE,
    },
    family_name: {
      title: t('Attributes.family_name'),
      type: attributeType.ATTRIBUTE,
    },
    birthdate_dateint: {
      title: t('Attributes.birthdate_dateint'),
      type: attributeType.PREDICATE,
      operator: PredicateType.LessThanOrEqualTo,
      defaultValue: 18,
    },
    picture: {
      title: t('Attributes.picture'),
      type: attributeType.ATTRIBUTE,
    },
    issue_date_dateint: {
      title: t('Attributes.issue_date_dateint'),
      type: attributeType.ATTRIBUTE,
    },
    expiry_date_dateint: {
      title: t('Attributes.expiry_date_dateint'),
      type: attributeType.ATTRIBUTE,
    },
    issuing_jurisdiction: {
      title: t('Attributes.issuing_jurisdiction'),
      type: attributeType.ATTRIBUTE,
    },
  }
}
