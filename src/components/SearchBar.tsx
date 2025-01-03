import React, { useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";

interface SearchBarProps {
    onSelectLocation: (location: { lat: number; lng: number; address: string }) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSelectLocation }) => {
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

    const handlePlaceChanged = () => {
        const place = autocompleteRef.current?.getPlace();
        if (place && place.geometry) {
            const location = {
                lat: place.geometry.location?.lat() || 0,
                lng: place.geometry.location?.lng() || 0,
                address: place.formatted_address || "",
            };
            onSelectLocation(location);
        }
    };

    return (
        <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
            onPlaceChanged={handlePlaceChanged}
            options={{
                types: ["address"], // Limita los resultados a direcciones específicas
                componentRestrictions: { country: "AR" }, // Restringe los resultados a Argentina
            }}
        >
            <input
                type="text"
                placeholder="Buscar ubicación"
                className="border border-primary p-2 rounded w-full mb-2"
            />
        </Autocomplete>
    );
};

export default SearchBar;