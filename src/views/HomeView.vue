<script setup>
import Card from '@/components/card/Card.vue';
import Slider from '@/components/Slider.vue';
import ExplorerCategory from '../components/ExploreCategory.vue';
</script>

<template>
	<main>
		<Slider />
		<Card/>
  <ExplorerCategory/>

	</main>
</template>

<style lang="scss" scoped>

p {
	margin-top: 100rem;
}
section{
	height: 21rem;
}

</style>