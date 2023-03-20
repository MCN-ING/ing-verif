import {Request} from '../contexts/types'

export type ManageRequestsParamList = {
  ManageRequests: undefined
  AddRequest: undefined
  RequestDetails: {
    item: Request
  }
  EditRequest: {
    itemId: string
    attribute: 'Title' | 'Description' | 'Attributes'
  }
}
