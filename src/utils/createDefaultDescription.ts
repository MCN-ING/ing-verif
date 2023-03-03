import {lightAttributeDetails} from '../contexts/types'

export const createDefaultDescription = (attributes: lightAttributeDetails[]): string => {
  const attributesArr = []
  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i].title.length > 0) {
      attributesArr.push(attributes[i].title)
    }
  }
  const attributesString = attributesArr.join(', ')
  return attributesString
}
