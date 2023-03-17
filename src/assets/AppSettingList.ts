import { uuid } from '@aries-framework/core/build/utils/uuid';
import { defaultLanguage } from '../constants';
import { AppSetting } from '../contexts/types';
import VersionNumber from 'react-native-version-number'


export const AppSettingList = (t: any): AppSetting[] => {

  return [
    {
      id: uuid(),
      title: t('AppSettingsList.Title1'),
      route: 'DisplayLanguage',
      name: 'langue',
      defaultValue: defaultLanguage,
        
    },
    {
      id: uuid(),
      title: t('AppSettingsList.Title2'),
      route: 'Historic',
    },
    {
      id: uuid(),
      title: t('AppSettingsList.Title3'),
      route: 'Notification',
    },
    {
      id: uuid(),
      title: t('AppSettingsList.Title4'),
      name: 'appVersion',
      defaultValue: VersionNumber.appVersion + '(' + VersionNumber.buildVersion + ')'
    },
  ]
}
