import React, { useEffect, useRef } from "react";
import { GoogleMap } from "@react-google-maps/api";

interface MapDisplayProps {
  location: {
    lat: number;
    lng: number;
    address: string;
  } | null;
}

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultLocation = { lat: -31.4201, lng: -64.1888 }; // Córdoba, Argentina

const MapDisplay: React.FC<MapDisplayProps> = ({ location }) => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;
    const position = location
      ? { lat: location.lat, lng: location.lng }
      : defaultLocation;

    // Si no existe un marcador, crea uno nuevo
    if (!markerRef.current) {
      markerRef.current = new google.maps.Marker({
        position,
        map,
        title: location?.address || "Ubicación predeterminada",
      });
    } else {
      // Actualiza la posición del marcador existente
      markerRef.current.setPosition(position);
    }

    // Centra el mapa en la nueva posición
    map.panTo(position);
  }, [location]);

  return (
    <div className="bg-secondary p-4 rounded-lg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location ? { lat: location.lat, lng: location.lng } : defaultLocation}
        zoom={14}
        onLoad={(map) => {
          mapRef.current = map;
        }}
      ></GoogleMap>
      <div className="text-center mt-4">
        {location ? (
          <p className="text-primary">{location.address}</p>
        ) : (
          <p className="text-darkGray">No se ha seleccionado ninguna ubicación.</p>
        )}
      </div>
    </div>
  );
};

export default MapDisplay;
