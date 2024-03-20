import { defineStore } from 'pinia';
import { reactive } from 'vue';



export const useProductsStore = defineStore('products',
 () => {
    const  products = reactive (
      [
      {
        id: 1,
        image: './public/images/KnifeBlock.jpeg', 
        title: 'KnifeBlock1', 
        description: 'Descripción del producto 1',
        price: 19.99,
      },
      {
        id: 2,
        image: './public/images/LaptopStand1.jpg', 
        title: 'LaptopStand1', 
        description: 'Descripción del producto 2',
        price: 29.99,
      },
      {
        id: 3,
        image: './public/images/CardDisplay1.png', 
        title: 'CardDisplay1', 
        description: 'Descripción del producto 3',
        price: 39.99,
      },
      {
        id: 4,
        image: './public/images/start_wars_clok1.jpg',
        title: 'Start Wars Cloak',
        description: 'Descripción del producto 4',
        price: 49.99,
      },
      {
        id: 5,
        image: './public/images/8Star_DragonBall_1.png',
        title: '8 Star Dragon Ball',
        description: 'Descripción del producto 5',
        price: 59.99,
      },
      {
        id: 6,
        image: './public/images/Naruto_Niño.jpg',
        title: 'Naruto Niño',
        description: 'Descripción del producto 6',
        price: 69.99,
      },
      {
        id: 7,
        image: './public/images/one_piece_pirate_ship3.png',
        title: 'One Piece Pirate Ship',
        description: 'Descripción del producto 7',
        price: 79.99,
      },
      {
        id: 8,
        image: './public/images/dark-holocron2.JPG',
        title: 'Dark Holocron',
        description: 'Descripción del producto 8',
        price: 89.99,
      },
      {
        id: 9,
        image: './public/images/JapaneseTableLamp13.jpeg',
        title: 'Japanese Table Lamp',
        description: 'Descripción del producto 9',
        price: 99.99,
      },
    ]);
     
     return {
        products,
     
    };
});
