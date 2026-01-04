import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn';
import { useQueryGetBrands } from '@/hooks/queries';

export const BrandsDataTable = () => {

  const { data } = useQueryGetBrands({ itemType: 'car' });

  if (!data) {
    return <></>;
  }

  return (
    <div className='overflow-hidden rounded-md border'>
      <Table>
        <TableHeader className='sticky top-0'>
          <TableRow>
            <TableHead className='w-[1%] whitespace-nowrap'>
              Id
            </TableHead>
            <TableHead className='px-10'>
              Intitulé
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
                  </TableRow>
                )
              )
          }
        </TableBody>
      </Table>
    </div>
  );

};
