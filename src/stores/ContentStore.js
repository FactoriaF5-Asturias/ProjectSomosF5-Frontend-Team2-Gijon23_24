import { defineStore } from "pinia";
import axios from "axios";

export const useContentStore = defineStore("content", {
	state: () => ({
		content: null,
		isLoading: false,
	}),
	actions: {
		async fetchContentById(id_product) {
			this.isLoading = true;
			const response = await axios.get(
				`http://localhost:8080/api/v1/products/${id_product}`
			);
			this.content = response.data;
			this.isLoading = false;
		},
	},
});
