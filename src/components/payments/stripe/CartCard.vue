<script setup>
const props = defineProps({
  product: Object,
  count: Number
});
</script>

<template>
  <article>
    <div>
      <div id="product_image"></div>
      <div id="product_data">
        <h1> {{ product.productName }}</h1>
        <h2>{{ product.productDescription }}</h2>
      </div>
    </div>
    <div>
      <p>{{ product.price }} €</p>
      <h3>x {{ count }}</h3>
    </div>
  </article>
</template>

<style scoped lang="scss">

article {
  width: 100%;
  background-color: #2B2B2B;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  color: white;

  > div {
    display: flex;
  }

}
#product_image {
  background-color: $primary-background;
  height: 16rem;
  width: 16rem;
  border-radius: 10px;
}
#product_data {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 3rem;
}
h1 {
  font-size: 2rem;
}
h2, h3 {
  font-size: 1.5rem;
  font-weight: 200;
}

p {
  align-content: center;
  font-size: 2rem;
  font-weight: 600;
}
</style>