import { HomePage, LayoutPage, LoginPage, NotFoundPage } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/constants';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.home} element={<LayoutPage />} />
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
