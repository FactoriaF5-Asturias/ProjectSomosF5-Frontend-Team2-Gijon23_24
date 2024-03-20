<script setup>
import HeaderButtons from "./header/HeaderButtons.vue";
import { useAuthStore } from "@/stores/AuthStore";

const AuthStore = useAuthStore();

</script>

<template>
    <header>

      <div>

        <div>
          <img src="/images/logotype.png" alt="PrintGo logotype">
        </div>

        <div id="actions_container">
          <router-link to="/">
            <div>
              <img src="/icons/icon-heart.svg" alt="">
              <p>Favoritos</p>
            </div>
          </router-link>

          <router-link to="/about">
            <div>
              <img src="/icons/icon-shopping-cart.svg" alt="">
              <p>Carrito</p>
            </div>
          </router-link>

          <HeaderButtons v-if="AuthStore.cookies === false || AuthStore.cookies === false"/>
          <div v-if="AuthStore.cookies === true || AuthStore.cookies === true"> hola
          </div>

        </div>
        
      </div>

      <nav>
        <router-link to="/" exact-active-class="active">Inicio</router-link>
        <router-link to="/about" exact-active-class="active">Litofanía</router-link>
        <router-link to="/about" exact-active-class="active">Hogar</router-link>
        <router-link to="/about" exact-active-class="active">Geek</router-link>
      </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;

  > div {
    background-color: $primary-background;
    height: 10rem;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    filter: drop-shadow(0 0 0.5rem black);
  }
}

#actions_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  a > div {
    gap: 1rem;
    display: flex;
    align-items: center;
  
    p {
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      color: $light-font;
      font-size: 1.4rem;
    }
  }
}
nav {
  background-color: $primary-background;
  height: 6rem;
  padding-left: 7rem;
  display: flex;
  align-items: center;
  gap: 3rem;

  a {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    color: $inactive-primary-color;
    font-size: 1.7rem;
    transition: all 0.2s ease-in-out;
  }
  a:hover {
    color: $primary-color;
  }
}
.active {
  color: $primary-color;
}

</style>