import React from 'react';
import CardView from '../components/CardView';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Carousel from '../components/Carousel';

const MainPage = ({ cars }) => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Header />
      <Carousel />
      <h2 className="text-6xl font-bold text-center m-4">Nuestros vehiculos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {cars.map((car) => (
          <CardView key={car.id} car={car} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
