import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('AuthStore', () => {
 let userRole = ref('');
 let username = ref('');
 let token = ref('');
 let id = ref(''); // Inicialización de id
 let isAuthenticated = ref(false);

 // Función para actualizar el id del usuario
 const setUserId = (userId) => {
    console.log('Actualizando ID del usuario en authStore:', userId); // Rastrear la actualización del ID
    id.value = userId;
 };

 // Dentro de tu AuthStore
 const setToken = (newToken) => {
    token = newToken;
 };

 // Función para actualizar el estado de autenticación
 const setIsAuthenticated = (authenticated) => {
    isAuthenticated.value = authenticated;
 };

 // Función para actualizar el rol del usuario
 const setUserRole = (role) => {
    userRole.value = role;
 };

 // Función para actualizar el nombre de usuario
 const setUsername = (name) => {
    username.value = name;
 };

 return {
    userRole,
    username,
    token,
    id,
    isAuthenticated,
    setUserId,
    setToken,
    setIsAuthenticated,
    setUserRole,
    setUsername,
 };
});