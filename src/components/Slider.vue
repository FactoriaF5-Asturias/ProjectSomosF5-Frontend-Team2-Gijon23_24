 <script>
export default {
 data() {
    return {
      items: [
      {
          title: 'Card 2',
          description: 'This is the description for card 2.',
          image: '../assets/img/Kaido.png',
        },
        {
          title: 'Card 2',
          description: 'This is the description for card 2.',
          image: 'https://cdn.vuetifyjs.com/images/cards/forest.jpg',
        },
        {
          title: 'Card 1',
          description: 'This is the description for card 1.',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
        {
          title: 'Card 2',
          description: 'This is the description for card 2.',
          image: 'https://cdn.vuetifyjs.com/images/cards/forest.jpg',
        },
        {
          title: 'Card 1',
          description: 'This is the description for card 1.',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
        // Agrega más objetos para más tarjetas
      ],
    };
 },
};
</script>
<template>
    <v-slide-group show-arrows class="slideGroup">
       <v-slide-group-item class="slideCard" v-for="(item, index) in items" :key="index">
         <v-card class="mx-6" max-width="500">
           <v-img :src="item.image" aspect-ratio="1.9"></v-img>
           <v-card-title>{{ item.title }}</v-card-title>
           <v-card-subtitle>{{ item.description }}</v-card-subtitle>
         </v-card>
       </v-slide-group-item>
    </v-slide-group>
   </template>
   <style scoped>
   .slideGroup {
    padding: 5em;
    align-self: center;
    background-color: rgba(33, 33, 33, 1);
   }
   .slideCard{
    background-image: url(../assets/img/Kaido.png);
   }
   </style> 