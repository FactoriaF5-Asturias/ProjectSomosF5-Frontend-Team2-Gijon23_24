import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('AuthStore', () => {
    let adminAuth = ref(false)
    let userAuth = ref(false)

    let cookies = ref(false)

    return { adminAuth, userAuth, cookies }
})
