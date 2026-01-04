import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn';
import type { IBrand } from '@/interfaces';

export const ModelsDataTable = () => {

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
            <TableHead className='w-[1%] whitespace-nowrap'>
              Id
            </TableHead>
            <TableHead className='px-10'>
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
                    <TableCell className='w-[1%] whitespace-nowrap'>
                      {l.id}
                    </TableCell>
                    <TableCell className='px-10'>
                      {l.title}
                    </TableCell>
                    <TableCell>
                      {l.createdAt?.toString()}
                    </TableCell>
                  </TableRow>
                )
              )
          }
        </TableBody>
      </Table>
    </div>
  );

};
