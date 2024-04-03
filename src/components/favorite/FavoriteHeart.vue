<script setup>
import { ref } from 'vue';

// Estado para el estado de "favorito"
const isFavorite = ref(false);

// Función para alternar el estado de "favorito"
const toggleFavorite = () => {
 isFavorite.value = !isFavorite.value;
};

</script>


<template>
    <div>
   
        <v-btn color="white" icon="/icons/icon-heart.svg" size="small"  variant="text" class="favorite action heart" @click="toggleFavorite " :class="{ visited: isFavorited }">
      <img :src="isFavorite ? '/icons/icon-heart.svg' : '/icons/icon-heart.svg'" alt="heart">
    </v-btn>
  
    </div>
  </template>
  
<style scoped lang="scss">
$hover-active-color: $primary-color;
 
  .action {
     border: 2px solid #CBBB9D;
     transition: border .15s ease-out, background .15s ease-out;
     background: rgba(0, 0, 0, .8);
     display: inline-block;
     cursor: pointer;
     border-radius: 50%;
     width: 3rem;
     height: 3rem;
     position: relative;
     text-align: center;
     line-height: 1.2em;
 
     &.visited {
         border-color: darken($primary-color, 80%);
     }
 
     &.favorite {
         &:hover:not(.visited.clicked) {
             border-color: darken($hover-active-color, 10%);
         }
         &::before, &::after {
             content: "";
             top: .6em;
             width: 1.275em;
             height: .85em;
             border-radius: .533333em 0 0 .533333em;
         }
         &::before {
             left: .32em;
             transform: rotate(45deg);
             background-color: darken($primary-color, 10%);
         }
         &::after {
             left: .64em;
             transform: rotate(-225deg);
             background: $hover-active-color;
         }
 
         &.visited {
             &::before {
                 background: linear-gradient(0deg, $hover-active-color 0%, $hover-active-color 80%, lighten($hover-active-color, 32%) 100%);
                 animation: pulseBefore 1280ms;
             }
             &::after {
                 background: linear-gradient(90deg, lighten($hover-active-color, 36%) 0%, $hover-active-color 40%);
                 animation: pulseAfter 1280ms;
             }
         }
     }
  }
 </style>