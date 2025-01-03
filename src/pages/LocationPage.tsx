import React, { useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import SearchBar from "../components/SearchBar";
import MapDisplay from "../components/MapDisplay";
import { useNavigate } from "react-router-dom";


const LocationPage: React.FC = () => {
    const [selectedLocation, setSelectedLocation] = useState<{
        lat: number;
        lng: number;
        address: string;
    } | null>(null);

    const navigate = useNavigate();

    // Usa el hook para cargar la API
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });

    const handleContinue = () => {
        if (selectedLocation) {
            console.log("Location elegida: ", selectedLocation);
            navigate("/agency", { state: { location: selectedLocation } });
        }
    };

    if (loadError) {
        return <div>Error al cargar Google Maps</div>;
    }

    if (!isLoaded) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="p-4 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-primary text-center">¿Dónde se puede ver?</h1>
            <SearchBar onSelectLocation={setSelectedLocation} />
            <MapDisplay location={selectedLocation} />
            <button
                onClick={handleContinue}
                className={`w-full max-w-md py-3 mt-4 rounded-lg text-white font-bold ${selectedLocation
                        ? "bg-actionBlue hover:bg-blue-700 transition duration-200"
                        : "bg-gray-500 cursor-not-allowed"
                    }`}
                disabled={!selectedLocation}
            >
                Continuar
            </button>
        </div>
    );
};

export default LocationPage;
