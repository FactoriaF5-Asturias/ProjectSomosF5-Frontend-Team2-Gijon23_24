<script setup>
import Card from './card/Card.vue';
import { ref } from 'vue';
import {useProductsStore} from "./../stores/productStore";

const productStore = useProductsStore();
const products = ref([]) 


const getProducts = async ()=> {
    try {
    await productStore.fetchProducts();
    
    products.value = productStore.products.reverse()
    .slice(0, 15);

} catch (error) {
    console.error("No se consiguieron los datos:",error)
}}
getProducts();

</script>

<template>
    <div>
        <h1>Novedades</h1>
        <v-slide-group prev-icon="mdi-chevron-left" next-icon="mdi-chevron-right" show-arrows class="slideGroup">
            <router-link class="slideCard" :to="'/Detail/' + product.id" v-for="product in products" :key="product.id">
                <v-slide-group-item class="display">
                    <Card :product="product" />
                </v-slide-group-item>
            </router-link>
        </v-slide-group>
    </div>
</template>

<style lang="scss" scoped>
.slideGroup {
    color: white
}

.slideCard {
    display: flex;
    align-items: center;
    padding: 1rem;
}

div {
    font-family: "Poppins", sans-serif;
    background-color:$primary-background;
    color: white;
    font-size: 3rem;

    h1 {
        margin-left: 6rem;
        margin-bottom: 1rem;
        font-weight: 200;
    }
}
</style> 