export interface Location {
    description: string;
    placeId: string;
  }
  
  export const fetchSuggestions = async (query: string): Promise<Location[]> => {
    try {
      const response = await fetch(`/api/georef`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
  
      if (!response.ok) {
        throw new Error("Error fetching suggestions");
      }
  
      const data = await response.json();
      return data; // El backend debe devolver un array de ubicaciones
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      return [];
    }
  };
  