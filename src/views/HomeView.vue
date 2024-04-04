<script setup>
import Banner from '@/components/Banner.vue';
import Card from '@/components/card/Card.vue';
import ExplorerCategory from '../components/ExploreCategory.vue';
</script>

<template>
	<main>
		<section></section>
		<Banner/>
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