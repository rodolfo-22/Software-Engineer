import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CarDetail = ({ cars }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find(car => car.id === parseInt(id));
  
  if (!car) return <div>No se encontró el coche.</div>;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % car.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + car.images.length) % car.images.length);
  };

  const handleQuoteVehicle = () => {
    navigate('/quote'); // Reemplaza '/quote' con la ruta de tu vista de cotización
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{car.model}</h2>
      <div className="relative w-full" style={{ height: '70vh' }}>
        <img src={car.images[currentImageIndex]} alt={`${car.model}`} className="object-cover w-full h-full rounded-lg shadow-lg" />
        <button onClick={handlePrevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">Prev</button>
        <button onClick={handleNextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">Next</button>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Detalles:</h3>
          <p>Año: <span className="font-medium">{car.year}</span></p>
          <p>Combustible: <span className="font-medium">{car.fuel}</span></p>
          <p>Precio: <span className="font-medium">{car.price}</span></p>
        </div>
        <button onClick={handleQuoteVehicle} className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200">Cotizar Vehículo</button>
      </div>
    </div>
  );
};

export default CarDetail;
