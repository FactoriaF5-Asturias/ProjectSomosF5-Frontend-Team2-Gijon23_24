<script setup>
const props = defineProps({
  show: Boolean,
  message: String
});
</script>

<template>
  <div v-if="show">
    <img src="/icons/icon-confirm.svg" alt="">
    <p>{{ message }}</p>
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
  background-color: $correct-color;
  border: 1px solid rgb(40, 225, 86);
  display: flex;
  gap: 1rem;
  align-items: center;
}
p {
  font-size: 1.6rem;
}

</style>