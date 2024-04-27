import { defineStore } from "pinia";
import axios from "axios";

const uri = import.meta.env.VITE_API_ENDPOINT_PROFILE;

export const useProfileStore = defineStore('profile', {
  state: () => ({
    content: null,
    isLoading: false, 
  }),
  actions: {
    async fetchContentById(id) {
      this.isLoading = true; 
      const response = await axios.get(`${this.uri}/${id}`);
      this.content = response.data;
      this.isLoading = false; 
  },
},
});
