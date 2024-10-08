import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../auth/LoginPage';
import RegisterPage from '../auth/RegisterPage';
import MainPage from '../ecommerce/pages/MainPage';
import CarDetail from '../ecommerce/components/CarDetail';

const AppRouter = () => {
  const [cars] = useState([
    { id: 1, model: 'Toyota RAV4', price: '$12,000', year: '2018', fuel: 'Gasoline', images: ['/toyota.jpg', '/toyota2.jpg', '/toyota3.jpg', '/toyota4.jpg', '/toyota5.jpg'] },
    { id: 2, model: 'Honda Civic', price: '$15,000', year: '2019', fuel: 'Diesel', images: ['/civic.jpg', '/civic2.jpg', '/civic3.jpg', '/civic4.jpg'] },

  ]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/*" element={<MainPage cars={cars} />} />
      <Route path="/car/:id" element={<CarDetail cars={cars} />} />
    </Routes>
  );
}

export default AppRouter;
