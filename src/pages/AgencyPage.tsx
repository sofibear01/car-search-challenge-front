import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { createPublication } from '../services/publicacionService';
import { toast } from 'react-toastify';

const AgencyPage: React.FC = () => {
  const navigate = useNavigate();
  const locationState = useLocation(); // Hook para obtener el estado de navegación
  const [agencyName, setAgencyName] = useState('');
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  // Actualiza la ubicación con el estado pasado desde la navegación
  useEffect(() => {
    if (locationState.state && locationState.state.location) {
      setLocation(locationState.state.location);
    }
  }, [locationState]);

  //console.log("Location que llega a la pagina: ", location);

  const handleNext = async () => {
    const publicationData = {
      agencyName,
      location,
    };

    try {
      const response = await createPublication(publicationData);
      console.log('Response:', response);
      
      if(response.status === 201){
        toast.success('Publicación creada correctamente');
      }
      
      setTimeout(() => {
        navigate('/');
      }, 3000);

    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al crear la publicación');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-primary mb-4">Ingrese el nombre del titular de la agencia</h1>
        <input
          type="text"
          value={agencyName}
          onChange={(e) => setAgencyName(e.target.value)}
          placeholder="Nombre y apellido"
          className="w-full max-w-md p-4 border-b-2 border-secondary text-lg text-black bg-transparent placeholder-secondary focus:outline-none mb-6"
        />
        <button
          onClick={handleNext}
          className={`w-full max-w-md py-3 rounded-lg text-white font-bold ${agencyName
            ? "bg-actionBlue hover:bg-blue-700 transition duration-200"
            : "bg-gray-500 cursor-not-allowed"
            }`}
          disabled={!agencyName}
        >
          Guardar
        </button>
      </div>
    </div>
  );
};

export default AgencyPage;
