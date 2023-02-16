import {PredicateType, ProofAttributeInfo, ProofPredicateInfo} from '@aries-framework/core'

import {Request} from '../contexts/types'

export const RequestsList = (t: any): Request[] => {
  return [
    {
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
      title: t('RequestsList.Title3'),
      description: t('RequestsList.Description3'),
      attributes: {
        name: new ProofAttributeInfo({
          names: ['Nom'],
          restrictions: [],
        }),
        prenom: new ProofAttributeInfo({
          names: ['Prénom'],
          restrictions: [],
        }),
      },
      predicates: undefined,
    },
  ]
}
