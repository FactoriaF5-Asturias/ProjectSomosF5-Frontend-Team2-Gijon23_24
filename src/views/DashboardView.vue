<script setup>
import AddForm from "../components/admin-dashboard-components/AddForm.vue";
import EditForm from "../components/admin-dashboard-components/EditForm.vue";
import AddButton from "@/components/admin-dashboard-components/AddButton.vue";
import { ref } from "vue";

let showAddForm = ref(false);
let showEditForm = ref(true);

const openAddForm = () => {
	showAddForm.value = true;
	showEditForm.value = false;
	console.log(showAddForm.value);
};

const openEditForm = () => {
	showAddForm.value = false;
	showEditForm.value = true;
};

const closeForm = () => {
	showAddForm.value = false;
	showEditForm.value = false;
};
</script>

<template>
	<main>
		<AddForm v-if="showAddForm" @close="closeForm" />
		<EditForm v-if="showEditForm" @close="closeForm" productId="1" />
		<section>
			<h1>ADMINISTRADOR</h1>
			<AddButton @click="openAddForm()" />
		</section>
		<section></section>
	</main>
</template>

<style lang="scss" scoped>
main {
	padding: 2rem;
	background-color: $primary-background;
}

section {
	display: flex;
	justify-content: space-between;
}

h1 {
	font-size: 3rem;
	color: white;
	font-family: "Poppins";
}
</style>
