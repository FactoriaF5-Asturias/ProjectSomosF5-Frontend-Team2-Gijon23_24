import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('AuthStore', () => {
    let userRole = ref('');
    let username = ref('');
    let isAuthenticated = ref(false);

    return { userRole, username, isAuthenticated }
});