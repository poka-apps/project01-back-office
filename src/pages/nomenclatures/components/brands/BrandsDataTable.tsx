import { BrandsDataTableHeader } from './BrandsDataTableHeader';
import { BrandsDataTableBody } from './BrandsDataTableBody';
import { useQueryGetBrands } from '@/hooks/queries';
import { Table } from '@/components/shadcn';
import { useParams } from '../../hooks';

export const BrandsDataTable = () => {

  const { itemType } = useParams();
  const { brands } = useQueryGetBrands({ itemType });

  return (
    <div className='overflow-hidden rounded-md border'>
      <Table>
        <BrandsDataTableHeader />
        <BrandsDataTableBody brands={brands} />
      </Table>
    </div>
  );

};
