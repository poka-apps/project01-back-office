import { TableBody, TableCell, TableRow } from '@/components/shadcn';
import type { IHasOptBrands } from '@/interfaces';

export const BrandsDataTableBody = ({ brands }: IHasOptBrands) => {

  if (!brands) {
    return <></>;
  }

  return (
    <TableBody>
      {
        brands
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
  );

};
