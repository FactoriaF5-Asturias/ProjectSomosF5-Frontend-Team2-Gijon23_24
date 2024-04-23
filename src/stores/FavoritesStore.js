import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favoriteProducts: ref([]),
  }),
  getters: {
    uri: () => {
      return import.meta.env.VITE_API_ENDPOINT_FAVORITES;
    },
  },
  actions: {
    async addToFavorites(product) {
      try {
        const uri = import.meta.env.VITE_API_ENDPOINT_FAVORITES ; 
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
  },
});


    // Otras acciones que puedas tener

