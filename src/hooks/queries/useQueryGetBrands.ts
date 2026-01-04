import type { IHasId, IHasItemType, IHasTitle } from '@/interfaces';
import useSWR from 'swr';

type TResponse = (IHasId & IHasTitle)[];

export const useQueryGetBrands = (params: IHasItemType) => {

  const { isLoading, error, mutate, data } = useSWR<TResponse>(`/brands?${new URLSearchParams(params as any)}`, { revalidateOnFocus: false });

  const refresh = () => mutate();

  return ({
    isLoading,
    refresh,
    error,
    data
  });

};
