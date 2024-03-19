
import { defineStore } from 'pinia';
import ImagesService from '../services/ImagesService';

export const useImagesStore = defineStore('images', {

 state: () => ({
    images: [],
    isLoading: true,
 }),

 actions: {
    async fetchImages() {
      const imagesService = new ImagesService();
      try {
        const images = await imagesService.getImages();
        this.images = products;
        this.isLoading = false;
      } catch (error) {
        console.error('Error al cargar los images:', error);
        this.isLoading = false; 
      }
    },

 },
});
