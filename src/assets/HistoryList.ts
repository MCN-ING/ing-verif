import { periodType } from '../constants';
import { History} from '../contexts/types';

export const HistoryList = (t: any): History[] => {

    return [
        {
            type: periodType.NONE,
            label: t('HistoryList.None'),
        },
        {
            type: periodType.WEEK,
            label: t('HistoryList.Week'),
        },
        {
            type: periodType.HALF_MONTH,
            label: t('HistoryList.HalfMonth'),
        },
        {
            type: periodType.MONTH,
            label: t('HistoryList.Month'),
        },
        {
            type: periodType.QUARTER,
            label: t('HistoryList.Quarter'),
        },
        {
            type: periodType.YEAR,
            label: t('HistoryList.Year'),
        },
        {
            type: periodType.ALL,
            label: t('HistoryList.All'),
        },
    ]
}
