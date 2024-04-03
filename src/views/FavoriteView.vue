<script setup>
import Card from '@/components/card/Card.vue';
import SearchBar from '@/components/favorite/SearchBar.vue';
import Pagination from '@/components/Pagination.vue';
</script>

<template>
	<main>
		<SearchBar/>
	<section class="favorite">
		<Card/>
      <Pagination/>
	</section>
	</main>
</template>

<style lang="scss" scoped>


.favorite {
	margin-top: 25rem;
}


</style>



