import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn';
import { type ColumnDef } from '@tanstack/react-table';
import type { IBrand } from '@/interfaces';
import { DataTable } from '@/components';
import { nameof } from '@/functions';

export const columns: ColumnDef<IBrand>[] = [
  {
    accessorKey: nameof<IBrand>('id'),
    header: 'Id'
  },
  {
    accessorKey: nameof<IBrand>('title'),
    header: 'Intitulé'
  }
];

export const BrandsDataTable = () => {

  const data = [
    {
      id: '1',
      title: 'Element 1'
    },
    {
      id: '2',
      title: 'Element 2'
    }
  ] as IBrand[];

  return (
    <div className='overflow-hidden rounded-md border'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              Id
            </TableHead>
            <TableHead>
              Intitulé
            </TableHead>
            <TableHead>
              Crée le
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            data
              .map(
                l => (
                  <TableRow key={l.id}>
                    <TableCell>
                      {l.id}
                    </TableCell>
                    <TableCell>
                      {l.title}
                    </TableCell>
                    <TableCell>
                      {l.createdAt?.toString()}
                    </TableCell>
                  </TableRow>
                )
              )
          }
          <TableRow>

          </TableRow>
        </TableBody>
      </Table>
    </div>
  );

  return (
    <div>
      <DataTable
        columns={columns}
        data={data} />
    </div>
  );

};
