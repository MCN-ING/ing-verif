import { Languages } from '../contexts/types';

export const LanguageList = (t: any): Languages[] => {

    return [
        {
            code: 'en',
            label: t('LanguageList.Title1'),
        },
        {
            code: 'fr',
            label: t('LanguageList.Title2'),
        },
    ]
}
