import { uuid } from '@aries-framework/core/build/utils/uuid';
import { AppSetting } from '../contexts/types';


export const ContactUsList = (t: any): AppSetting[] => {

  return [
    {
      id: uuid(),
      title: t('ContactUsList.Phone'),
      route: 'Phone',
    },
    {
      id: uuid(),
      title: t('ContactUsList.ByEmail'),
      route: 'ByEmail',
    },
    {
      id: uuid(),
      title: t('ContactUsList.ReportProblem'),
      route: 'ReportProblem',
    },
  ]
}
