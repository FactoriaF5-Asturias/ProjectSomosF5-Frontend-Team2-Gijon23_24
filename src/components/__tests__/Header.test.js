import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';

import Header from '../general/Header.vue';



const router = createRouter({
 history: createWebHistory(),
 routes: [
    { path: '/', component: { template: '<div>Inicio</div>' } },
    { path: '/about', component: { template: '<div>Sobre Nosotros</div>' } },
 ],
});

describe('HeaderComponent', () => {
 it('debería renderizar correctamente y mostrar/ocultar componentes basados en el estado de autenticación', () => {
    
    const wrapper = mount(Header, {
      global: {
        plugins: [router],
        mocks: {
          $authStore: authStore,
        },
      },
    });

   
    expect(wrapper.findComponent(LoggedProfile).exists()).toBe(false);

   
    authStore.isAuthenticated = true;
    wrapper.vm.$nextTick();

    expect(wrapper.findComponent(HeaderButtons).exists()).toBe(false);
    expect(wrapper.findComponent(LoggedProfile).exists()).toBe(true);
 });
});