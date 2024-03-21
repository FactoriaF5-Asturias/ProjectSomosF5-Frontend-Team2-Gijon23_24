import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('AuthStore', () => {
    let userRole = ref('');
    let isAutheticated = ref(false);

    return { userRole, isAutheticated }
})
