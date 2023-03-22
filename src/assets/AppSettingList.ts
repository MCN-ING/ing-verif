import { uuid } from '@aries-framework/core/build/utils/uuid';
import { defaultLanguage } from '../constants';
import { AppSetting } from '../contexts/types';
import VersionNumber from 'react-native-version-number'


export const AppSettingList = (t: any): AppSetting[] => {

  return [
    {
      id: uuid(),
      title: t('AppSettingsList.DisplayLanguage'),
      route: 'DisplayLanguage',
      name: 'langue',
      defaultValue: defaultLanguage,
        
    },
    {
      id: uuid(),
      title: t('AppSettingsList.History'),
      route: 'History',
    },
    {
      id: uuid(),
      title: t('AppSettingsList.Notification'),
      route: 'Notification',
    },
    {
      id: uuid(),
      title: t('AppSettingsList.AppVersion'),
      name: 'appVersion',
      defaultValue: VersionNumber.appVersion + '(' + VersionNumber.buildVersion + ')'
    },
  ]
}
