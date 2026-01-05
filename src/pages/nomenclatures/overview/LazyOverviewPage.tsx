import { lazy, Suspense } from 'react';
import { Loader } from '@/components';

const OverviewPage = lazy(() => import('./OverviewPage'));

export const LazyOverviewPage = () => (
  <Suspense fallback={<Loader />}>
    <OverviewPage />
  </Suspense>
);
