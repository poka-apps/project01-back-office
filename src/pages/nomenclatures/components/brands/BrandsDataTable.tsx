import { type ColumnDef } from '@tanstack/react-table';
import type { IHasId, IHasTitle } from '@/interfaces';
import { DataTable } from '@/components';
import { nameof } from '@/functions';

export const columns: ColumnDef<IHasId & IHasTitle<string>>[] = [
  {
    accessorKey: nameof<IHasId>('id'),
    header: 'Id'
  },
  {
    accessorKey: nameof<IHasTitle>('title'),
    header: 'Intitulé'
  }
];

export const BrandsDataTable = () => {

  return (
    <div>
      <DataTable
        columns={columns}
        data={[]} />
    </div>
  );

};
