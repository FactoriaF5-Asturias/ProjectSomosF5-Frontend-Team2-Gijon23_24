<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Footer from '../src/components/Footer.vue';
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    
  </header>

  <RouterView />
  <Footer/> 

</template>

<style scoped>
.wrapper {
  font-size: 1.5rem;
}
</style>
