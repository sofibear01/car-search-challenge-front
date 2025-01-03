import React, { useEffect, useMemo, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { getPublications } from '../services/publicacionService';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: -31.4201,
    lng: -64.1888
};

const CarsPage: React.FC = () => {
    const [publications, setPublications] = useState<{ id: number; lat: number; lng: number; nombreTitular: string }[]>([]);
    const [selectedPublication, setSelectedPublication] = useState<{ id: number; lat: number; lng: number; nombreTitular: string } | null>(null);

     // Memoriza los parámetros del loader
     const loaderOptions = useMemo(() => ({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: ['places' as const],
    }), []);

    const { isLoaded } = useJsApiLoader(loaderOptions);

    useEffect(() => {
        const fetchPublications = async () => {
            try {
                const data = await getPublications();

                const formattedData = data.map((publication: { id: number; latitud: string; longitud: string; nombreTitular: string }) => ({
                    id: publication.id,
                    lat: parseFloat(publication.latitud),
                    lng: parseFloat(publication.longitud),
                    nombreTitular: publication.nombreTitular,
                }));

                setPublications(formattedData);
            } catch (error) {
                console.error('Error fetching publications:', error);
            }
        };

        fetchPublications();
    }, []);

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-primary p-6 relative">
            <div className={`w-full max-w-4xl bg-secondary rounded-lg shadow-lg p-6 mx-4 ${selectedPublication ? "filter blur-sm" : ""}`}>
                <h1 className="text-2xl font-semibold text-center text-primary mb-4">Mapa de autos en venta</h1>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    {publications.map((publication) => (
                        <Marker
                            key={publication.id}
                            position={{ lat: publication.lat, lng: publication.lng }}
                            onClick={() => setSelectedPublication(publication)}
                        />
                    ))}
                </GoogleMap>
            </div>

            {/* Modal personalizado */}
            {selectedPublication && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 mt-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full flex flex-col items-center">
                        <h2 className="text-2xl font-semibold mb-4">Detalles de la publicación</h2>
                        <p><strong>Nombre del titular de la agencia:</strong> {selectedPublication.nombreTitular}</p>
                        <p><strong>Latitud:</strong> {selectedPublication.lat}</p>
                        <p><strong>Longitud:</strong> {selectedPublication.lng}</p>
                        <div className="mt-8">
                            <button
                                onClick={() => setSelectedPublication(null)}
                                className="bg-actionBlue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CarsPage;
