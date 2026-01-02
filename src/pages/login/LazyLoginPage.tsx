import { lazy, Suspense } from 'react';
import { Loader } from 'lucide-react';

const LoginPage = lazy(() => import('./LoginPage'));

export const LazyLoginPage = () => (
  <Suspense fallback={<Loader />}>
    <LoginPage />
  </Suspense>
);
