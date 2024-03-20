import { createApp } from 'vue';
import { mount } from '@vue/test-utils';
import Header from '../general/Header.vue';
import { test, expect } from 'vitest';
import HeaderButtons from '../general/header/HeaderButtons.vue';

test('renderiza el componente header con logo, acciones y enlaces de navegación', async () => {
 const app = createApp({});
 const wrapper = mount(Header, { app });

 const logo = wrapper.find('img[src="/images/logotype.png"]');
 expect(logo.exists()).toBe(true);

 const actionsContainer = wrapper.find('#actions_container');
 expect(actionsContainer.exists()).toBe(true);

 const favoritosLink = actionsContainer.find('router-link[to="/"]');
 expect(favoritosLink.exists()).toBe(true);
 const favoritosText = favoritosLink.find('p');
 expect(favoritosText.text()).toBe('Favoritos');

 const carritoLink = actionsContainer.find('router-link[to="/about"]');
 expect(carritoLink.exists()).toBe(true);
 const carritoText = carritoLink.find('p');
 expect(carritoText.text()).toBe('Carrito');

 const headerButtons = wrapper.findComponent(HeaderButtons);
 expect(headerButtons.exists()).toBe(true);

 const navLinks = wrapper.findAll('nav router-link');
 expect(navLinks.length).toBe(4);

 await wrapper.unmount();
});