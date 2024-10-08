import React from 'react';
import CardView from '../components/CardView';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainPage = ({ cars }) => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Header />
      <h2 className="text-3xl font-bold text-center mt-4">Available Cars</h2>
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
