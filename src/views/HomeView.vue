<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ExplorerCategory from '../components/ExploreCategory.vue';
import Banner from "@/components/Banner.vue";
import Slider from '@/components/Slider.vue';


const products = ref([]);
const router = useRouter();


// router.afterEach(() => {
//     fetchProductsByRoute();
// });
</script>

<template>
    <main>
        <Slider />
        <Card/>
        <ExplorerCategory/>
    </main>
</template>

<style lang="scss" scoped>
</style>


