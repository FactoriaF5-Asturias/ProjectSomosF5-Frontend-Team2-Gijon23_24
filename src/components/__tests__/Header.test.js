import { mount } from '@vue/test-utils';
import { test, expect } from 'vitest';
import Header from '../general/Header.vue';
import HeaderButtons from '../general/header/HeaderButtons.vue';
import LoggedProfile from '../general/header/LoggedProfile.vue';
import { reactive } from 'vue';

test('muestra y oculta componentes basados en el estado de autenticación', async () => {
 const authStore = reactive({ // Usa reactive para hacer que authStore sea reactivo
    isAuthenticated: false,
 });

 const wrapper = mount(Header, {
    global: {
      mocks: {
        $authStore: authStore,
      },
    },
 });

 expect(wrapper.findComponent(HeaderButtons).exists()).toBe(true);
 expect(wrapper.findComponent(LoggedProfile).exists()).toBe(false);

 authStore.isAuthenticated = true; 
 await wrapper.vm.$nextTick();

 expect(wrapper.findComponent(LoggedProfile).exists()).toBe(true);
 expect(wrapper.findComponent(HeaderButtons).exists()).toBe(false);
});