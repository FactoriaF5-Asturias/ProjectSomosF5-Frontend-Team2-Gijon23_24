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
  },

  
  getters: {
    getItems() {
      return this.items;
    },
  },
});