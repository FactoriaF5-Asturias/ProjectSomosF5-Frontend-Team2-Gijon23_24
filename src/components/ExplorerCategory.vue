<script setup>
    
</script>
<template>
    <div class="container">
        <h1 class="text-center">Explora nuestras categorías</h1>
        <div>
    <v-container
      class="mb-6"
    >
      <v-row
        align="start"
        style="height: 150px;"
        no-gutters
      >
        <v-col
          v-for="n in 3"
          :key="n"
        >
          <v-sheet class="pa-2 ma-2">
            <img src="../assets/img/geek.png" width="300">
          </v-sheet>
        </v-col>

        
      </v-row>
    </v-container>
  </div>
    </div>
  </template>

<style lang="scss" scoped>

@import '../assets/explorer_category.scss';



</style>