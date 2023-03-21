import { uuid } from '@aries-framework/core/build/utils/uuid';
import { AppSetting } from '../contexts/types';


export const HelpCenterList = (t: any): AppSetting[] => {

  return [
    {
      id: uuid(),
      title: t('HelpCenterList.AppTutorial'),
      route: 'AppTutorial',
    },
    {
      id: uuid(),
      title: t('HelpCenterList.UserManual'),
      route: 'UserManual',
    },
    {
      id: uuid(),
      title: t('HelpCenterList.TransferWallet'),
      route: 'TransferWallet',
    },
    {
      id: uuid(),
      title: t('HelpCenterList.ImproveApp'),
      route: 'ImproveApp',
    },
  ]
}
