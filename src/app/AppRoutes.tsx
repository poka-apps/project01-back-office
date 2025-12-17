import { HomePage, LoginPage, NotFoundPage, Page1, Page2 } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout, MainLayout } from '@/layouts';
import { ROUTES } from '@/constants';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* App avec layout */}
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.page1} element={<Page1 />} />
        <Route path={ROUTES.page2} element={<Page2 />} />
      </Route>
      {/* Auth sans layout principal */}
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.login} element={<LoginPage />} />
      </Route>
      {/* 404 */}
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
