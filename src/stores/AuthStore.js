import { defineStore } from 'pinia'

export const useAuthStore = defineStore('AuthStore', () => {
    let adminAuth = false
    let userAuth = false

    return { adminAuth, userAuth }
})
