import { Languages } from '../contexts/types';

export const LanguageList = (t: any): Languages[] => {

    return [
        {
            code: 'en',
            label: t('LanguageList.English'),
        },
        {
            code: 'fr',
            label: t('LanguageList.French'),
        },
    ]
}
