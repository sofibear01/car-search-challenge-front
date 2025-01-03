import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCar } from 'react-icons/fa';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-primary flex flex-col items-center justify-center min-h-screen px-4"
        >
            {/* Título */}
            <h1 className="text-5xl font-semibold text-white mb-10">Venta de autos</h1>

            {/* Ícono */}
            <FaCar className="text-white text-[150px] mb-10" />

            {/* Botón */}
            <button
                onClick={() => navigate("/location")}
                className="bg-actionBlue text-white py-4 px-8 rounded-lg shadow-lg text-xl hover:bg-blue-700 transition duration-200"
            >
                Nueva publicación
            </button>

            {/* Botón */}
            <button
                onClick={() => navigate("/carsmap")}
                className="bg-actionBlue text-white py-4 px-8 rounded-lg shadow-lg text-xl hover:bg-blue-700 transition duration-200 mt-4"
            >
                Ver autos en venta
            </button>
        </div>
    );
};

export default Home;