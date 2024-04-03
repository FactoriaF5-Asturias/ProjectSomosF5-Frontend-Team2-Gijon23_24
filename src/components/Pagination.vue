<template>
   <div class="text-center">
     <v-pagination
       v-model="page"
       :length="4"
       next-icon="../../public/icons/chevron-right.svg"
       prev-icon="../../public/icons/chevron-left.svg"
     ></v-pagination>
   </div>
 </template>
 
 <script>
   export default {
     data() {
       return {
         page: 1,
       }
     },
   }
 </script>
 