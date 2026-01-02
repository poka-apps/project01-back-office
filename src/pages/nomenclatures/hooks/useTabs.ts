import type { TTabname } from '../types';
import { useQueryParam } from '@/hooks';

export const useTabs = () => {

  const { value, setValue } = useQueryParam<TTabname>({ name: 'tab', options: { defaultValue: 'brands' } });

  return ({
    setTab: (newValue: TTabname) => setValue(newValue),
    tab: value
  });

};
