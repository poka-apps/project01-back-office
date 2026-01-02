import { AnnoncesPage, GaragesPage, DashboardPage, LoginPage, NotFoundPage, UsersPage } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout, MainLayout } from '@/layouts';
import { ROUTES } from '@/constants';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* App with layout */}
      <Route element={<MainLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path={ROUTES.annonces} element={<AnnoncesPage />} />
        <Route path={ROUTES.garages} element={<GaragesPage />} />
        <Route path={ROUTES.users} element={<UsersPage />} />
      </Route>
      {/* Auth without layout principal */}
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.login} element={<LoginPage />} />
      </Route>
      {/* 404 */}
      <Route path={ROUTES.notFound} element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
