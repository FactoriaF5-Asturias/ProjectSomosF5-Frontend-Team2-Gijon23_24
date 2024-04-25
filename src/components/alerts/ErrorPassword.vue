<script setup>
const props = defineProps({
  message: String,
  show: Boolean
});

const emits = defineEmits(['close']);

const closeMessage = () => {
  emits('close');
};
</script>

<template>
  <div v-if="show">
    <img src="/icons/icon-cross-white.svg" alt="" @click="closeMessage">
    <p> {{ message }}</p>
  </div>
</template>

<style scoped lang="scss">
div {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 9999;
  background-color: $error-color;
  border: 1px solid rgb(225, 40, 40);
  display: flex;
  gap: 1rem;
  align-items: center;
}
p {
  font-size: 1.6rem;
}

</style>