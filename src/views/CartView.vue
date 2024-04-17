<script setup>
import { useCartStore } from '@/stores/CartStore';
import CartCard from './../components/stripe/CartCard.vue'

const store = useCartStore();


console.log(store.cart)

const payWithStripe = () => {

}
</script>

<template>
    <body>
        <CartCard v-for="(product, index) in store.cart" :key="id" :product="product"/>
        <button @click="payWithStripe">pagar</button>
    </body>
</template>

<style scoped lang="scss">
</style>