// store/products.js

import { defineStore } from 'pinia';

export const useProductsStore = defineStore({
 id: 'products',
 state: () => ({
    products: [
      {
        id: 1,
        image: 'https://example.com/product1.jpg',
        title: 'Producto 1',
        description: 'Descripción del producto 1',
        price: 19.99,
      },
      {
        id: 2,
        image: 'https://example.com/product2.jpg',
        title: 'Producto 2',
        description: 'Descripción del producto 2',
        price: 29.99,
      },
      {
        id: 2,
        image: 'https://example.com/product2.jpg',
        title: 'Producto 2',
        description: 'Descripción del producto 2',
        price: 29.99,
      },
      {
        id: 2,
        image: 'https://example.com/product2.jpg',
        title: 'Producto 2',
        description: 'Descripción del producto 2',
        price: 29.99,
      },
      // Agrega más productos aquí
    ],
 }),
 actions: {
    addProduct(product) {
      this.products.push(product);
    },
    updateProduct(updatedProduct) {
      const index = this.products.findIndex(p => p.id === updatedProduct.id);
      if (index !== -1) {
        this.products.splice(index, 1, updatedProduct);
      }
    },
    deleteProduct(productId) {
      this.products = this.products.filter(p => p.id !== productId);
    },
    fetchProducts() {
      // Simulación de una llamada a la API
      setTimeout(() => {
        this.products = [
          {
            id: 1,
            image: 'https://example.com/product1.jpg',
            title: 'Producto 1',
            description: 'Descripción del producto 1',
            price: 19.99,
          },
          {
            id: 2,
            image: 'https://example.com/product2.jpg',
            title: 'Producto 2',
            description: 'Descripción del producto 2',
            price: 29.99,
          },
          // Agrega más productos aquí
        ];
      }, 1000);
    },
 },
 getters: {
    allProducts: (state) => state.products,
    productById: (state) => (id) => state.products.find(p => p.id === id),
 },
});
