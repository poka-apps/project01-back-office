import type { TItemType } from '@/types';
import type { TTabname } from '../types';
import { useQueryParams } from '@/hooks';

export const useParams = () => {

  const {
    values: [itemType, tab],
    setValue
  } = useQueryParams({
    names: ['itemType', 'tab'],
    defaultValue: {
      itemType: 'car',
      tab: 'brands'
    }
  });

  return ({
    setItemType: (newValue: TItemType) => setValue('itemType', newValue),
    setTab: (newValue: TTabname) => setValue('tab', newValue),

    itemType: itemType as TItemType,
    tab: tab as TTabname
  });

};
