import { uuid } from '@aries-framework/core/build/utils/uuid';
import { AppSetting } from '../contexts/types';


export const HelpCenterList = (t: any): AppSetting[] => {

  return [
    {
      id: uuid(),
      title: t('HelpCenterList.Title1'),
      route: 'AppTutorial',
    },
    {
      id: uuid(),
      title: t('HelpCenterList.Title2'),
      route: 'UserManual',
    },
    {
      id: uuid(),
      title: t('HelpCenterList.Title3'),
      route: 'TransferWallet',
    },
    {
      id: uuid(),
      title: t('HelpCenterList.Title4'),
      route: 'ImproveApp',
    },
  ]
}
