<script setup>

const props = defineProps({
  product: Object
});

</script>

<template>
  <div>
    <h1> {{ product.id }}</h1>
    <h1> {{ product.productName }}</h1>
  </div>
</template>

<style scoped lang="scss">

div {
  height: 10rem;
  background-color: red;
}
</style>