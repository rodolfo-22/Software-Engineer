import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
        <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Venta de carros</h1>
        <nav>
          <Link 
            to="/login" 
            className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
          >
            Iniciar Sesión
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
