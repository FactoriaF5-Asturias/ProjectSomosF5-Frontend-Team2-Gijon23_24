<script setup>
import AddForm from "../components/admin-dashboard-components/AddForm.vue";
import AddButton from "@/components/admin-dashboard-components/AddButton.vue";
import { ref } from "vue";

let showAddForm = ref(false);
let showEditForm = ref(false);

const openAddForm = () => {
	showAddForm.value = true;
	showEditForm.value = false;
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
	<h1>ADMINISTRADOR</h1>
	<section>
		<AddButton @click="openAddForm()" />
	</section>
	<AddForm v-if="showAddForm" @close="closeForm" />
</template>

<style lang="scss" scoped></style>
