import {PredicateType, ProofAttributeInfo, ProofPredicateInfo} from '@aries-framework/core'
import {uuid} from '@aries-framework/core/build/utils/uuid'
import {TFunction} from 'i18next'

import {Request} from '../contexts/types'

export const RequestsList = (t: TFunction<'translation', undefined, 'translation'>): Request[] => {
  return [
    {
      id: uuid(),
      title: t('RequestsList.Title1'),
      description: t('RequestsList.Description1'),
      attributes: {
        family_name: new ProofAttributeInfo({
          names: ['family_name'],
          restrictions: [],
        }),
      },
      predicates: {
        birthdate_dateint: new ProofPredicateInfo({
          name: 'birthdate_dateint',
          predicateType: PredicateType.LessThanOrEqualTo,
          predicateValue: 18,
          restrictions: [],
        }),
      },
    },
    {
      id: uuid(),
      title: t('RequestsList.Title2'),
      description: t('RequestsList.Description2'),
      attributes: {
        family_name: new ProofAttributeInfo({
          names: ['family_name'],
          restrictions: [],
        }),
      },
      predicates: {
        birthdate_dateint: new ProofPredicateInfo({
          name: 'birthdate_dateint',
          predicateType: PredicateType.LessThanOrEqualTo,
          predicateValue: 65,
          restrictions: [],
        }),
      },
    },
    {
      id: uuid(),
      title: t('RequestsList.Title4'),
      description: t('RequestsList.Description4'),
      attributes: undefined,
      predicates: {
        birthdate_dateint: new ProofPredicateInfo({
          name: 'birthdate_dateint',
          predicateType: PredicateType.LessThanOrEqualTo,
          predicateValue: 18,
          restrictions: [],
        }),
      },
    },
    {
      id: uuid(),
      title: t('RequestsList.Title3'),
      description: t('RequestsList.Description3'),
      attributes: {
        given_names: new ProofAttributeInfo({
          names: ['given_names'],
          restrictions: [],
        }),
        family_name: new ProofAttributeInfo({
          names: ['family_name'],
          restrictions: [],
        }),
      },
      predicates: undefined,
    },
  ]
}
