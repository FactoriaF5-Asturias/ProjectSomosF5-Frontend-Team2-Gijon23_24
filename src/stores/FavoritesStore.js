import { defineStore } from "pinia";
import axios from "axios";

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favoriteProducts: [],
    isLoaded: false,
  }),

  actions: {

    async loadFavorites(email) {
      const uri = import.meta.env.VITE_API_ENDPOINT_GENERAL;

      try {
        const response = await axios.get(`${uri}/profiles/getByEmail/${email}`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        this.isLoaded = true;
        this.favoriteProducts = response.data.favorites;

      } catch (error) {
        console.error("Error al cargar favoritos:", error);
      }
    },
    
    async addToFavorites(product) {
      try {
        const uri = import.meta.env.VITE_API_ENDPOINT_FAVORITES; 
        const response = await axios.put(uri + '/' + product, {
          productId: product.id,
        }, { withCredentials: true });
        console.log('esto es para añadir:',response);
        if (response.status === 200) {
          this.favoriteProducts.push(product); 
        } else {
          console.error('Error al agregar el producto a favoritos');
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    },

    async removeFromFavorites(product) {
      try {
        const uri = import.meta.env.VITE_API_ENDPOINT_FAVORITES; 
        const response = await axios.put(uri + '/' + product, {
          productId: product.id,
        }, { withCredentials: true });
        console.log('Esto es para borrar:', response);
        if (response.status === 200) {
          console.log('Producto eliminado de favoritos', product);
        } else {
          console.error('Error al eliminar el producto de favoritos');
        }
      } catch (error) {
        console.error('Error al eliminar el producto de favoritos:', error);
        throw error;
      }
    },
  },
});