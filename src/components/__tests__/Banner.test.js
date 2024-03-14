import { createApp } from 'vue';
import { mount } from 'vitest';
import Banner from '../Banner.vue';

test('renders header component with logo, actions, and navigation links', async () => {
 const app = createApp({});
  
 const wrapper = mount(Banner, { app });

 const logo = wrapper.find('.logo-container img');
 expect(logo.exists()).toBe(true);

 const titleWhite = wrapper.find('.title-white');
 const titlePurple = wrapper.find('.title-purple');
 expect(titleWhite.text()).toBe('Print');
 expect(titlePurple.text()).toBe('Go');

 const subtitle = wrapper.find('h2');
 expect(subtitle.text()).toBe('Haciendo tangible lo inimaginable.');

 const searchBar = wrapper.find('.searchbar');
 const textInput = searchBar.find('.text-input');
 const submitButton = searchBar.find('.submit-button');
 expect(searchBar.exists()).toBe(true);
 expect(textInput.exists()).toBe(true);
 expect(submitButton.exists()).toBe(true);

 // Añadir prueba para verificar una interacción de usuario, como un clic en el botón de búsqueda
 await wrapper.find('.submit-button').trigger('click');
 expect(wrapper.emitted()).toHaveProperty('search-clicked');

 await wrapper.unmount();
});