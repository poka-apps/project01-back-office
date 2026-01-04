import { Tabs, TabsList, TabsTrigger } from '@/components/shadcn';
import { useQueryGetNomenclatures } from '@/hooks/queries';
import { ButtonFilterRadioGroup } from '@/components';
import type { TTabname } from '../types';
import { useTabs } from '../hooks';

export const Header = () => {

  const { nomenclatures } = useQueryGetNomenclatures({ type: 'itemTypes' });
  const { tab, setTab } = useTabs();

  const handleOnValueChange = (newTab: string) =>
    setTab(newTab as TTabname);

  return (
    <div className='flex flex-col gap-2'>
      <div>
        <ButtonFilterRadioGroup
          options={nomenclatures.map(l => ({ title: l.title, value: l.id }))}
          onChange={options => { }}          
          text='Type' />
      </div>
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
    </div>
  );

};
