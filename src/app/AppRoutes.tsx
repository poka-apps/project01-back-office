import { AnnoncesPage, HomePage, LoginPage, NotFoundPage, Page1, Page2, UsersPage } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout, MainLayout } from '@/layouts';
import { ROUTES } from '@/constants';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* App with layout */}
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.annonces} element={<AnnoncesPage />} />
        <Route path={ROUTES.users} element={<UsersPage />} />
        <Route path={ROUTES.page1} element={<Page1 />} />
        <Route path={ROUTES.page2} element={<Page2 />} />
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
