<script setup>
import AddForm from "@/components/admin-dashboard-components/AddForm.vue";
import { ref } from "vue";
</script>

<template>
	<button>Añadir nuevo artículo</button>
</template>

<style lang="scss" scoped>
button {
	background-color: #ae81d1;
	color: white;
	border-radius: 1rem;
	padding: 1rem 2rem;
	transition: ease-in-out 3s;
}

button:hover {
	background-color: #422359;
}
</style>
 