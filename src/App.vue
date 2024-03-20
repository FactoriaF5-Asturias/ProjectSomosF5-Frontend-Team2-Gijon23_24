<script setup>
import { RouterView } from 'vue-router'
import Header from "./components/general/Header.vue";
import { useAuthStore } from './stores/AuthStore';

const store = useAuthStore();

function verificarCookies() {

    var cookies = document.cookie;
    
    if (cookies) {
        store.cookies = true;
        console.log("Se encontraron cookies.");
    } else {
        store.cookies = false;
        console.log("No se encontraron cookies.");
    }
}

verificarCookies()

</script>

<template>

<Header/>
  <RouterView />
</template>

<style scoped>
</style>
// redirigir segun tu rol
// poner limites
// cambiar header
// cambiar router para que no puedas entrar ni en dashboard ni en dashboard de admin, segun el rol abrir ruta de dashboard o el de productos.
// logout