import { useQueryGetInfo } from '@/hooks/queries';
import { AppRoutes } from './AppRoutes';

export const App = () => {

  const result = useQueryGetInfo();

  console.log(result);

  return <AppRoutes />;

};
