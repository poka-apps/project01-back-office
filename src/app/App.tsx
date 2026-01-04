import { useGetInfo } from '@/hooks/fetchApi';
import { AppRoutes } from './AppRoutes';

export const App = () => {

  const result = useGetInfo();

  console.log(result);

  return <AppRoutes />;

};
