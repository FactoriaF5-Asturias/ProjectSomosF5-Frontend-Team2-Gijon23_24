<script setup>
import Card from '@/components/card/Card.vue';
import SearchBar from '@/components/favorite/SearchBar.vue';
import Pagination from '@/components/Pagination.vue';
</script>

<template>
	<main>
		<section></section>
		<SearchBar/>
	<section class="favorite">
		<Card/>
      <Pagination/>
	</section>
	</main>
</template>

<style lang="scss" scoped>
section{
	height: 50rem;
}

.favorite {
	margin-top: -18rem;
}


</style>



