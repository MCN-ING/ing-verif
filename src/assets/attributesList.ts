import {PredicateType} from '@aries-framework/core'

import {attributeType} from '../constants'
import {AttributeDetails} from '../contexts/types'

export const AttributesList = (t: any): AttributeDetails => {
  return {
    given_name: {
      title: t('Attributes.given_name'),
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
      type: attributeType.PREDICATE,
      operator: PredicateType.GreaterThanOrEqualTo,
      defaultValue: 1,
    },
    expiry_date_dateint: {
      title: t('Attributes.expiry_date_dateint'),
      type: attributeType.PREDICATE,
      operator: PredicateType.GreaterThanOrEqualTo,
      defaultValue: 0,
    },
    issuing_jurisdiction: {
      title: t('Attributes.issuing_jurisdiction'),
      type: attributeType.ATTRIBUTE,
    },
  }
}
