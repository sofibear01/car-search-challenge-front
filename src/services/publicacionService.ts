import axios from 'axios';
import api from './api';

// Función para crear una publicación
export const createPublication = async (publicationData: { agencyName: string; location: { lat: number; lng: number } }) => {
  try {
    const response = await api.post('/publications/createPublication', publicationData);
    return response;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Error al guardar la publicación');
    } else {
      throw new Error('Error al guardar la publicación');
    }
  }
};

// Función para obtener todas las publicaciones
export const getPublications = async () => {
  try {
    const response = await api.get('/publications/getAllPublications');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Error al obtener las publicaciones');
    } else {
      throw new Error('Error al obtener las publicaciones');
    }
  }
};