<script setup>
import { useAuthStore } from './../../../stores/AuthStore';

const authStore = useAuthStore();

</script>

<template>
  <div>
    <img src="/icons/icon-user.svg" alt="user icon">
    <p> {{ authStore.username }} </p>
    <img src="/icons/icon-log-out.svg" alt="log out icon">
  </div>
</template>

<style scoped lang="scss">
div {
    height: 5rem;
    padding: 0.5rem;
    border-radius: 10px;
    background-color: white;
    display: flex;
}
img {
  height: 100%;
}
</style>