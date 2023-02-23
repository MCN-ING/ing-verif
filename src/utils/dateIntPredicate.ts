import {Predicate} from '../contexts/types'

const getCurrentDateInDateIntFormat = () => {
  const zeroPad = (num: number, places: number) => String(num).padStart(places, '0')
  const date = new Date()
  const year = zeroPad(date.getFullYear(), 4)
  const month = zeroPad(date.getMonth() + 1, 2)
  const day = zeroPad(date.getDate(), 2)
  return parseInt(year + month + day)
}

export const dateIntPredicate = (predicate: Predicate) => {
  const newPredicate: Predicate = {}
  for (const key in predicate) {
    const element = predicate[key]
    if (element.name.includes('dateint')) {
      const predicateValue = element.predicateValue
      newPredicate[key] = {
        ...element,
        predicateValue: getCurrentDateInDateIntFormat() - predicateValue * 10000,
      }
    } else {
      newPredicate[key] = element
    }
  }
  return newPredicate
}
