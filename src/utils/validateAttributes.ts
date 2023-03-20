import {lightAttributeDetails} from '../contexts/types'

export const isValidAttributes = (attributes: lightAttributeDetails[]) => {
  return attributes.length > 0 && attributes.some((att) => att.title.length > 0)
}
