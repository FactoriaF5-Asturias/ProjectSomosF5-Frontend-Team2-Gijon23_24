import { defineStore } from "pinia";
import ProductsService from "../services/ProductsService";

export const useProductsStore = defineStore("products", {
	state: () => ({
		products: [],
		isLoaded: true,
	}),

	actions: {
		async fetchProducts() {
			const productsService = new ProductsService();
			try {
				const products = await productsService.getProducts();
				this.products = products;
				this.isLoaded = true;
			} catch (error) {
				console.error("Error al cargar los productos:", error);
				this.isLoaded = false;
			}
		},
	},
});
