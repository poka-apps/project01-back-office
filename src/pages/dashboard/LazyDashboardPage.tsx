import { lazy, Suspense } from 'react';
import { Loader } from 'lucide-react';

const DashboardPage = lazy(() => import('./DashboardPage'));

export const LazyDashboardPage = () => (
  <Suspense fallback={<Loader />}>
    <DashboardPage />
  </Suspense>
);
