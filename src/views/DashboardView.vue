<script setup>
import AddForm from "../components/admin-dashboard-components/AddForm.vue";
import EditForm from "../components/admin-dashboard-components/EditForm.vue";
import AddButton from "@/components/admin-dashboard-components/AddButton.vue";
import { ref, onMounted, computed } from "vue";
import DashboardCard from "@/components/card/DashboardCard.vue";
import { useProductsStore } from "@/stores/productStore";

const store = useProductsStore()

let showAddForm = ref(false);
let showEditForm = ref(false);

const currentPage = ref(1);
const ProductsPerPage = 25;
const totalPages = computed(() =>
	Math.ceil(store.products.length / ProductsPerPage)
);

onMounted(() => {
	store.fetchProducts()
});

const openAddForm = () => {
	showAddForm.value = true;
	showEditForm.value = false;
	console.log(showAddForm.value);
};


const closeForm = () => {
	showAddForm.value = false;
	showEditForm.value = false;
};

const paginatedProducts = computed(() => {
	const startIndex = (currentPage.value - 1) * ProductsPerPage;
	return store.products.slice(startIndex, startIndex + ProductsPerPage);
});

const nextPage = () => {
	currentPage.value = Math.min(currentPage.value + 4, totalPages.value);
	scrollToTop();
};

const prevPage = () => {
	currentPage.value = Math.max(currentPage.value - 4, 1);
	scrollToTop();
};

const changePage = (page) => {
	currentPage.value = page;
	scrollToTop();
};

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

const visiblePages = computed(() => {
	const pagesToShow = 4;
	const visible = [];
	const startPage = Math.max(1, currentPage.value);
	for (
		let i = startPage;
		i < startPage + pagesToShow && i <= totalPages.value;
		i++
	) {
		visible.push(i);
	}
	return visible;
});
</script>

<template>
	<main>
		<div class="admin-container">
			<AddForm v-if="showAddForm" @close="closeForm" />
			<EditForm v-if="showEditForm" @close="closeForm" productId="1" />
			<section class="admin-panel">
				<h1>ADMINISTRADOR</h1>
				<AddButton class="add-btn" @click="openAddForm()" />
			</section>
			<section>
				<div v-if="paginatedProducts.length">
					<div id="product-container" v-for="product in paginatedProducts">
						<DashboardCard
							:product="product"
							:key="product.id"
							v-if="store.isLoaded"
						/>
					</div>
				</div>
			</section>
			<div id="pagination">
				<button
					class="pagination-arrow"
					@click="prevPage"
					:disabled="currentPage <= 1"
				>
					<<
				</button>
				<button
					v-for="page in visiblePages"
					:key="page"
					@click="changePage(page)"
					:class="{ 'active-page': currentPage === page }"
				>
					{{ page }}
				</button>
				<button
					class="pagination-arrow"
					@click="nextPage"
					:disabled="currentPage >= totalPages"
				>
					>>
				</button>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>

.admin-container {
	padding-top: 5rem;
}
.card-options {
	position: relative;
	padding: 0 1.4rem;
	display: flex;
	justify-content: space-between;
}

main {
	background-color: $primary-background;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	> div {
		width: 85%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		color: white;
		font-weight: 200;
		font-family: "Poppins", sans-serif;
		margin: auto;
	}
}

.admin-panel {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

h1 {
	font-size: 3rem;
	color: white;
	font-family: "Poppins";
}

hr {
	margin: 0 0 2rem 0;
}
section {
	text-align: center;

	> div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
		gap: 2rem;
		justify-content: flex-start;
		align-items: flex-start;
	}
}

#pagination {
	display: flex;
	justify-content: center;
	gap: 2rem;
	font-weight: 600;
}

button {
	transition: transform 0.2s ease-in-out;
	min-width: 5rem;
	min-height: 5rem;
	background-color: grey;
	border-radius: 4px;
	font-size: 1.3rem;
}
button:hover {
	transform: translate(0, -3px);
}

.pagination-arrow {
	background-color: rgb(77, 77, 77);
}
.active-page {
	background-color: $primary-color;
}

.add-btn {
	background-color: #ae81d1;
	margin-bottom: 2rem;
}
#product-container {
	justify-self: center;
}
</style>
