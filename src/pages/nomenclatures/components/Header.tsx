import { Tabs, TabsList, TabsTrigger } from '@/components/shadcn';
import type { TTabname } from '../types';
import { useTabs } from '../hooks';

export const Header = () => {

  const { tab, setTab } = useTabs();

  const handleOnValueChange = (newTab: string) =>
    setTab(newTab as TTabname);

  return (
    <Tabs
      value={tab}
      onValueChange={handleOnValueChange}>
      <TabsList>
        <TabsTrigger
          className='cursor-pointer'
          value={('brands' as TTabname)}>
          Marques
        </TabsTrigger>
        <TabsTrigger
          className='cursor-pointer'
          value={('models' as TTabname)}>
          Modèles
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );

};
