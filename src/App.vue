<script setup>
import { RouterView } from 'vue-router'
import Header from "./components/general/Header.vue";
</script>

<template>

<Header/>
  <RouterView />
</template>

<style scoped>
</style>
// redirigir segun tu rol
// poner limites
// cerrar formulario
// cambiar header
// cambiar router para que no puedas entrar ni en dashboard ni en dashboard de admin, segun el rol abrir ruta de dashboard o el de productos.
// logout