import { uuid } from '@aries-framework/core/build/utils/uuid';
import { AppSetting } from '../contexts/types';


export const AboutList = (t: any): AppSetting[] => {

  return [
    {
      id: uuid(),
      title: t('AboutList.Title1'),
      route: 'TermsUse',
    },
    {
      id: uuid(),
      title: t('AboutList.Title2'),
      route: 'Confidentiality',
    },
    {
      id: uuid(),
      title: t('AboutList.Title3'),
      route: 'Vulnerability',
    },
    {
      id: uuid(),
      title: t('AboutList.Title4'),
      route: 'Accessibility',
    },
  ]
}
