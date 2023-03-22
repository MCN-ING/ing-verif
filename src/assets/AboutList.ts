import { uuid } from '@aries-framework/core/build/utils/uuid';
import { AppSetting } from '../contexts/types';


export const AboutList = (t: any): AppSetting[] => {

  return [
    {
      id: uuid(),
      title: t('AboutList.TermsUse'),
      route: 'TermsUse',
    },
    {
      id: uuid(),
      title: t('AboutList.Confidentiality'),
      route: 'Confidentiality',
    },
    {
      id: uuid(),
      title: t('AboutList.Vulnerability'),
      route: 'Vulnerability',
    },
    {
      id: uuid(),
      title: t('AboutList.Accessibility'),
      route: 'Accessibility',
    },
  ]
}
