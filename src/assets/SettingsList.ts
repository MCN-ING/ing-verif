import {uuid} from '@aries-framework/core/build/utils/uuid'
import {Setting} from '../contexts/types'

export const SettingsList = (t: any): Setting[] => {
  return [
    {
      id: uuid(),
      title: t('SettingsList.Title1'),
      route : 'AppSettings'
    },
    {
      id: uuid(),
      title: t('SettingsList.Title2'),
      route : 'HelpCenter'
    },
    {
      id: uuid(),
      title: t('SettingsList.Title3'),
      route : 'About'
    },
    {
      id: uuid(),
      title: t('SettingsList.Title4'),
      route : 'ContactUs'
    },
  ]
}
