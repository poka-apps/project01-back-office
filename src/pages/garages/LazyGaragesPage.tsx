import { lazy, Suspense } from 'react';
import { Loader } from 'lucide-react';

const GaragesPage = lazy(() => import('./GaragesPage'));

export const LazyGaragesPage = () => (
  <Suspense fallback={<Loader />}>
    <GaragesPage />
  </Suspense>
);

