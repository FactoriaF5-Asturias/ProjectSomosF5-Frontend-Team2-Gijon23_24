<script setup>
import CardContainer from '@/components/card/CardContainer.vue';
import Slider from '@/components/Slider.vue';
import ExplorerCategory from '../components/ExploreCategory.vue';
</script>

<template>
	<main>
		<section></section>
		<Slider />
		<CardContainer/>
  <ExplorerCategory/>

	</main>
</template>

<style lang="scss" scoped>
section{
	height:3rem;
}

</style>