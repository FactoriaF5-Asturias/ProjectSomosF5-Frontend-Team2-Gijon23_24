<script setup>
import { defineProps } from 'vue';
    
const props = defineProps({
  show: Boolean
});
</script>

<template>
  <div v-if="show">
    <img src="/icons/icon-confirm.svg" alt="">
    <p>Se ha registrado con éxito, revise su correo electronico para confirmar su solicitud.</p>
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
  background-color: rgb(96, 206, 116);
  border: 1px solid rgb(40, 225, 86);
  display: flex;
  gap: 1rem;
  align-items: center;
}
p {
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
}

</style>