<script setup>
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

  <RouterView />
</template>

<style scoped>
.wrapper {
  font-size: 1.5rem;
}
</style>
