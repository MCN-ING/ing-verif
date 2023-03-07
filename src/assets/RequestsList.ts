import {PredicateType, ProofAttributeInfo, ProofPredicateInfo} from '@aries-framework/core'
import {uuid} from '@aries-framework/core/build/utils/uuid'

import {Request} from '../contexts/types'

export const RequestsList = (t: any): Request[] => {
  return [
    {
      id: uuid(),
      title: t('RequestsList.Title1'),
      description: t('RequestsList.Description1'),
      attributes: {
        name: new ProofAttributeInfo({
          names: ['Nom'],
          restrictions: [],
        }),
      },
      predicates: {
        age: new ProofPredicateInfo({
          name: 'age',
          predicateType: PredicateType.GreaterThanOrEqualTo,
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
        name: new ProofAttributeInfo({
          names: ['Nom'],
          restrictions: [],
        }),
      },
      predicates: {
        age: new ProofPredicateInfo({
          name: 'age',
          predicateType: PredicateType.GreaterThanOrEqualTo,
          predicateValue: 65,
          restrictions: [],
        }),
      },
    },
    {
      id: uuid(),
      title: t('RequestsList.Title4'),
      description: t('RequestsList.Description4'),
      attributes: {},
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
        name: new ProofAttributeInfo({
          names: ['given_name'],
          restrictions: [],
        }),
        prenom: new ProofAttributeInfo({
          names: ['family_name'],
          restrictions: [],
        }),
      },
      predicates: undefined,
    },
  ]
}
