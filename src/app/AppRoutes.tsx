import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, NotFoundPage } from '@/pages';
import { ROUTES } from '@/constants';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
