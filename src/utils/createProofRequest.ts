import {ProofAttributeInfo, ProofPredicateInfo} from '@aries-framework/core'

import {attributeType} from '../constants'
import {lightAttributeDetails, Request, specificPredicatesDetails} from '../contexts/types'

import {createDefaultDescription} from './createDefaultDescription'

interface Props {
  title: string
  description: string
  attributes: lightAttributeDetails[]
}

export const createProofRequest = ({title, description, attributes}: Props, t: any): Request => {
  const proofPredicates: any = {}
  const proofAttributes: any = {}
  let nomberOfUndefined = 0
  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i].specific?.type == attributeType.PREDICATE) {
      const specificPredicateDetails = attributes[i].specific as specificPredicatesDetails
      proofPredicates[attributes[i].raw_name] = new ProofPredicateInfo({
        name: attributes[i].raw_name,
        predicateType: specificPredicateDetails.operator,
        predicateValue: specificPredicateDetails.value,
        restrictions: [],
      })
    } else if (attributes[i].specific?.type == attributeType.ATTRIBUTE) {
      proofAttributes[attributes[i].raw_name] = new ProofAttributeInfo({
        names: [attributes[i].raw_name],
        restrictions: [],
      })
    } else {
      nomberOfUndefined += 1
    }
  }

  if (nomberOfUndefined == attributes.length) {
    throw new Error(t('Error.EmptyAttributes'))
  } else if (title.length == 0) {
    throw new Error(t('Error.EmptyTitle'))
  }

  const descriptionFinal = description.length == 0 ? createDefaultDescription(attributes) : description

  return {
    title: title,
    description: descriptionFinal,
    attributes: proofAttributes,
    predicates: proofPredicates,
  }
}
