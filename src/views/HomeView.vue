<script setup>
import ExplorerCategory from "../components/ExploreCategory.vue";
import Banner from "@/components/Banner.vue";
import Slider from "@/components/Slider.vue";
import SearchBar from '@/components/searchbar/SearchBar.vue';
</script>

<template>
    <main>
       
        <Slider />

        <Card/>
        <ExplorerCategory/>
        <SearchBar />

    </main>
</template>

<style lang="scss" scoped></style>
