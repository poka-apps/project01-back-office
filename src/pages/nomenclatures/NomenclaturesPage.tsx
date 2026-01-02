import { Tabs, TabsList, TabsTrigger } from '@/components/shadcn';

const NomenclaturesPage = () => {

  console.log('Page nomenclatures');

  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
      <Tabs defaultValue='account'>
        <TabsList className='cursor-pointer'>
          <TabsTrigger value='account'>
            Marques
          </TabsTrigger>
          <TabsTrigger value='password'>
            Modèles
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );

};

export default NomenclaturesPage;
