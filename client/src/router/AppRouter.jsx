import { Routes, Route } from 'react-router-dom';
import LoginPage from '../auth/pages/LoginPage';
import RegisterPage from '../auth/pages/RegisterPage';
import MainPage from '../ecommerce/pages/MainPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/*" element={<MainPage />} />
    </Routes>
  );
}

export default AppRouter;
