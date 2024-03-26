<script setup>
import axios from 'axios';
import { useAuthStore } from './../../../stores/AuthStore';

const authStore = useAuthStore();

console.log(authStore.userRole, authStore.username, authStore.isAuthenticated);

const userLogout = async () => {
    try {
        await axios.get('http://localhost:8080/api/v1/logout', {}, {withCredentials: true});
        authStore.userRole = '';
        authStore.username = '';
        authStore.isAuthenticated = false;
        console.log('ha funcionado adioos!!!!!!!', authStore.userRole, authStore.username, authStore.isAuthenticated);
    } catch (error) {
        console.error('Ha ocurrido un error durante el logout: ', error);
        console.log(authStore.userRole, authStore.username, authStore.isAuthenticated);
        
    }
};

</script>

<template>
  <div>
    <img id="photo" src="/icons/icon-user.svg" alt="user icon">
    <p> {{ authStore.userName }} </p>
    <hr>
    <button @click="userLogout">Cerrar sesión</button>
  </div>
</template>

<style scoped lang="scss">
div {
    height: 5rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: white;
    gap: 1rem;
}
hr {
  transform: rotate(90deg);
  width: 4rem;
}
img {
  height: 100%;
  border: 2px solid white;
  border-radius: 100%;
  height: 100%;
}
</style>