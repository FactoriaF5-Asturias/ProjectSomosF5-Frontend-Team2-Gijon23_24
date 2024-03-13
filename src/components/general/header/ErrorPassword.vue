<script setup>
import { defineProps } from 'vue';
    
const props = defineProps({
  message: String,
  show: Boolean
});
</script>

<template>
  <div v-if="show">
    <img src="/icons/icon-cross-white.svg" alt="">
    <p>Lo siento, las contraseñas no coinciden.</p>
  </div>
</template>

<style scoped>
div {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 9999;
  background-color: rgb(243, 92, 92);
  border: 1px solid rgb(225, 40, 40);
  display: flex;
  gap: 1rem;
  align-items: center;
}
p {
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
}

</style>