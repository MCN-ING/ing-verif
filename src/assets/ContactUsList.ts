import { uuid } from '@aries-framework/core/build/utils/uuid';
import { AppSetting } from '../contexts/types';


export const ContactUsList = (t: any): AppSetting[] => {

  return [
    {
      id: uuid(),
      title: t('ContactUsList.Title1'),
      route: 'Phone',
    },
    {
      id: uuid(),
      title: t('ContactUsList.Title2'),
      route: 'ByEmail',
    },
    {
      id: uuid(),
      title: t('ContactUsList.Title3'),
      route: 'ReportProblem',
    },
  ]
}
