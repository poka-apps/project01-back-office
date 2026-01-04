import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout, MainLayout } from '@/layouts';
import { ROUTES } from '@/constants';
import {
  LazyNomenclaturesPage,
  LazyEquipmentsPage,
  LazyDashboardPage,
  LazyAnnoncesPage,
  LazyNotFoundPage,
  LazyGaragesPage,
  LazyLoginPage,
  LazyUsersPage
} from '@/pages';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* App with layout */}
      <Route element={<MainLayout />}>
        <Route index element={<LazyDashboardPage />} />
        {/* #region nomenclatures */}
        <Route path={ROUTES.nomenclatures.equipments} element={<LazyEquipmentsPage />} />
        <Route path={ROUTES.nomenclatures.brands} element={<LazyNomenclaturesPage />} />
        {/* #endregion */}
        <Route path={ROUTES.annonces} element={<LazyAnnoncesPage />} />
        <Route path={ROUTES.garages} element={<LazyGaragesPage />} />
        <Route path={ROUTES.users} element={<LazyUsersPage />} />
      </Route>
      {/* Auth without layout principal */}
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.login} element={<LazyLoginPage />} />
      </Route>
      {/* 404 */}
      <Route path={ROUTES.notFound} element={<LazyNotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
