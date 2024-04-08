
import { useAuthStore } from '@/stores/AuthStore';
import axios from 'axios';



export default class FavoritesService {
 uri = import.meta.env.VITE_API_ENDPOINT_FAVORITES;

 async updateFavorites(profileId) {
    const authStore = useAuthStore();
    const token = authStore.token; // Accede al valor del token

    try {
      console.log('Token:', token); // Imprime el token para depuración
      const response = await axios.put(`${this.uri}/${profileId}`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error al actualizar los favoritos:', error);
      throw error;
    }
 }




 uri2 = import.meta.env.VITE_API_ENDPOINT_FAVORITES_GET

 async getFavoriteProducts(profileId, token) {
  try {
   
    const authStore = useAuthStore();
const profileId = id;

    const response = await axios.get(`${this.uri2}/${id}`, {}, {
      
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
    console.log(response)
  } catch (error) {
    console.error('Error al cargar los favoritos:', error);
    throw error;
  }
}

}




