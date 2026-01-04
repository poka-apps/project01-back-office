import { BrandsDataTableHeader } from './BrandsDataTableHeader';
import { BrandsDataTableBody } from './BrandsDataTableBody';
import { useQueryGetBrands } from '@/hooks/queries';
import { Table } from '@/components/shadcn';

export const BrandsDataTable = () => {

  const { data } = useQueryGetBrands({ itemType: 'car' });

  return (
    <div className='overflow-hidden rounded-md border'>
      <Table>
        <BrandsDataTableHeader />
        <BrandsDataTableBody brands={data} />
      </Table>
    </div>
  );

};
