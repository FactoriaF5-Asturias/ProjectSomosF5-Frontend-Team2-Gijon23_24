import { defineStore } from 'pinia';
import { reactive } from 'vue';



export const useProductsStore = defineStore('products',
 () => {
    const  products = reactive (
      [
      {
        id: 1,
        image: '/images/KnifeBlock1.jpeg', 
        title: 'KnifeBlock1', 
        description: 'Descripción del producto 1',
        price: 19.99,
      },
      {
        id: 2,
        image: '/images/LaptopStand1.jpg', 
        title: 'LaptopStand1', 
        description: 'Descripción del producto 2',
        price: 29.99,
      },
      {
        id: 3,
        image: '/images/CardDisplay1.png', 
        title: 'CardDisplay1', 
        description: 'Descripción del producto 3',
        price: 39.99,
      },
    ]);
     
     return {
        products,
     
    };
});
