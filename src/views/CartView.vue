<script setup>
import { useCartStore } from '@/stores/CartStore';
import CartCard from './../components/payments/stripe/CartCard.vue'
import { useRouter } from 'vue-router';

const store = useCartStore();
const router  = useRouter();

const payWithStripe = () => {
    router.push('/stripe-checkout');
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