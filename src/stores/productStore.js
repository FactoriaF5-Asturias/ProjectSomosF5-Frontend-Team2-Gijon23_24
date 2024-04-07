import { defineStore } from 'pinia';
import ProductsService from '../services/ProductsService';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    isLoaded: true,
    favorites: [], // This array will store favorite product IDs
  }),
  actions: {
    async fetchProducts() {
      const productsService = new ProductsService();
      try {
        const products = await productsService.getProducts();
        this.products = products;
        this.isLoaded = true;
      } catch (error) {
        console.error('Error al cargar los productos:', error);
        this.isLoaded = false;
        this.handleImageError();
      }
    },
    addFavorite(product) {
      this.favorites.push(product.id);
    },
    removeFavorite(productId) {
      const index = this.favorites.findIndex(id => id === productId);
      if (index !== -1) {
        this.favorites.splice(index, 1);
      }
    },
    toggleFavorite(product) {
      const productId = product.id;
      const index = this.favorites.findIndex(id => id === productId);
      if (index === -1) {
        // Si el producto no está en la lista de favoritos, lo agregamos
        this.favorites.push(productId);
      } else {
        // Si el producto ya está en la lista de favoritos, lo removemos
        this.favorites.splice(index, 1);
      }
    },
    isFavorite(productId) {
      return this.favorites.includes(productId);
    },
    handleImageError() {
      this.isLoaded = false;
    },
    
  },
});