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
    clearCart() {
      this.items = [];
      this.cart = [];
    }
  },
  
  getters: {
    
    getItems() {
      return this.items;
    },

    cartProductsCount() {
      return this.cart.length;
    },
  },
});