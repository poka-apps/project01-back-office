import { lazy, Suspense } from 'react';
import { Loader } from '@/components';

const NomenclaturesPage = lazy(() => import('./NomenclaturesPage'));

export const LazyNomenclaturesPage = () => (
  <Suspense fallback={<Loader />}>
    <NomenclaturesPage />
  </Suspense>
);
