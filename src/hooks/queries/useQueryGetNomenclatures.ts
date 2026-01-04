import type { INomenclature, IHasType } from '@/interfaces';
import type { TNomenclatureType } from '@/types';
import useSWR from 'swr';

type TResponse = INomenclature[];

export const useQueryGetNomenclatures = (params: IHasType<TNomenclatureType>) => {

  const { isLoading, error, mutate, data } = useSWR<TResponse>(`/nomenclatures?${new URLSearchParams(params as any)}`, { revalidateOnFocus: false });

  const refresh = () => mutate();

  return ({
    isLoading,
    refresh,
    error,
    data
  });

};
