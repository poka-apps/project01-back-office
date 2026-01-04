import type { IHasName } from '@/interfaces';
import { dayjs } from '@/config';
import useSWR from 'swr';

type TResponse = {
  database: {
    lastMigration: IHasName & {
      appliedAt: Date;
    };
    status: 'success';
  };
  environment: string;
  version: string;
  lang: string;
  date: Date;
};

export const useQueryGetInfo = () => {

  const { isLoading, error, mutate, ...props } = useSWR<TResponse>('/info');

  let data = props.data;

  if (data?.database?.lastMigration?.appliedAt) {
    data.database.lastMigration.appliedAt = dayjs(data.database.lastMigration.appliedAt).toDate();
  }

  if (data?.date) {
    data.date = dayjs(data.date).toDate();
  }

  const refresh = () => mutate();

  return ({
    isLoading,
    refresh,
    error,
    data
  });

};
