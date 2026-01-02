import { useLocation as useLocationReactRouterDom } from 'react-router-dom';

export const useLocation = () => {

  const loc = useLocationReactRouterDom();

  const pathname = loc.pathname.toLowerCase();

  const isRoute = (route: string) =>
    pathname === route?.toLowerCase();

  return ({
    pathname,
    isRoute
  });

};
