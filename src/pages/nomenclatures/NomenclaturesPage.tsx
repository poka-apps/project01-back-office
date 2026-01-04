import { Models, Header, Brands } from './components';
import { useTabs } from './hooks';

const NomenclaturesPage = () => {

  const { tab } = useTabs();

  return (
    <div className='flex flex-1 flex-col space-y-3 p-4 pt-0'>
      <Header />
      {tab === 'models' && <Models />}
      {tab === 'brands' && <Brands />}
    </div>
  );

};

export default NomenclaturesPage;
