<script setup>
<<<<<<< HEAD
import { RouterView } from 'vue-router'
import Header from "./components/general/Header.vue";
</script>

<template>

<Header/>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>

=======
import { RouterView } from "vue-router";
import Header from "./components/general/Header.vue";
import Footer from './components/Footer.vue';
import Space from './components/general/Space.vue';
</script>

<template>
  
  <Header />
  <Space />
>>>>>>> dev
  <RouterView />
  <!-- <Footer />  -->

</template>

<style scoped>
</style>
