import {uuid} from '@aries-framework/core/build/utils/uuid'
import {Setting} from '../contexts/types'

export const SettingsList = (t: any): Setting[] => {
  return [
    {
      id: uuid(),
      title: t('SettingsList.AppSetting'),
      route : 'AppSettings'
    },
    {
      id: uuid(),
      title: t('SettingsList.HelpCenter'),
      route : 'HelpCenter'
    },
    {
      id: uuid(),
      title: t('SettingsList.About'),
      route : 'About'
    },
    {
      id: uuid(),
      title: t('SettingsList.ContactUs'),
      route : 'ContactUs'
    },
  ]
}
