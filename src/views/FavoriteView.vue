<script setup>
import Card from '@/components/card/Card.vue';
import SearchBar from '@/components/favorite/SearchBar.vue';
import Pagination from '@/components/Pagination.vue';
import { useProductsStore } from '@/stores/ProductStore';
import { onMounted } from 'vue';
const productsStore = useProductsStore();

// Para asegurarse de que los productos favoritos estén cargados cuando se monta el componente
onMounted(async () => {
 await productsStore.fetchProducts();
});
</script>

<template>
 <main>
    <section></section>
    <SearchBar/>
    <section class="favorite">
      <Card v-for="product in productsStore.favorites" :key="product.id" :product="product"/>
      <Pagination/>
    </section>
 </main>
 <section class="footer"></section>
</template>

<style lang="scss" scoped>
section{
	height: 35rem;
}

.favorite {
	margin-top: -18rem;
}
p {
	margin-top: 100rem;
}
.footer{
	height: 105rem;
}
</style>



