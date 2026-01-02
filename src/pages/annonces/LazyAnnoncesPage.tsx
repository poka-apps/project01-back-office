import { lazy, Suspense } from 'react';
import { Loader } from 'lucide-react';

const AnnoncesPage = lazy(() => import('./AnnoncesPage'));

export const LazyAnnoncesPage = () => (
  <Suspense fallback={<Loader />}>
    <AnnoncesPage />
  </Suspense>
);
