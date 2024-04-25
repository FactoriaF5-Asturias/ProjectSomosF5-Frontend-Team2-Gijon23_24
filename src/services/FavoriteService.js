


import { authStore } from '@/stores/AuthStore'; // Importa la tienda de autenticación directamente

export default class FavoritesService {
  uri = import.meta.env.VITE_API_ENDPOINT_FAVORITES;

  async updateFavorites(profileId) {
    const token = authStore.token; // Accede al token directamente desde la tienda de autenticación

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

  uri2 = import.meta.env.VITE_API_ENDPOINT_FAVORITES_GET;

  async getFavoriteProducts(id, token) {
    try {
      const response = await axios.get(`${this.uri2}/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error al cargar los favoritos:', error);
      throw error;
    }
  }
}
