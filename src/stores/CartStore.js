import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: [],
    cart:[]
  }),
  actions: {
    addToCart(product, shortProduct) {
      this.items.push(shortProduct);
      this.cart.push(product);
    },
    // Otras acciones como eliminar un producto del carrito, actualizar la cantidad, etc.
  },

  
  // Getters para obtener datos del estado de la store
  getters: {
    // Getter para obtener los elementos del carrito
    getItems() {
      return this.items;
    },
  },
});