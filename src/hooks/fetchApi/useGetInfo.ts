import { axios } from '@/config';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get<any>(url);

export const useGetInfo = () => {

  const { data, isLoading, error } = useSWR('/info', fetcher);

  return ({
    isLoading,
    data,
    error
  });

};
