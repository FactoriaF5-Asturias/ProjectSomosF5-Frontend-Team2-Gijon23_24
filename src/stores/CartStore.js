import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  // Nombre único para identificar la store
  id: 'cart',
  // Estado inicial de la store
  state: () => ({
    cartItems: [] // Array para almacenar los elementos del carrito
  }),
  // Acciones para interactuar con el estado de la store
  actions: {
    // Acción para agregar un producto al carrito
    addToCart(product) {
      // Añadir el producto al array de elementos del carrito
      this.cartItems.push(product);
    },
    // Otras acciones como eliminar un producto del carrito, actualizar la cantidad, etc.
  },
  // Getters para obtener datos del estado de la store
  getters: {
    // Getter para obtener los elementos del carrito
    getCartItems() {
      return this.cartItems;
    },
    // Otros getters si es necesario
  },
});