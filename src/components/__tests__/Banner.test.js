import { createApp } from 'vue';
import { mount } from '@vue/test-utils';
import Banner from '../Banner.vue';
import { test, expect } from 'vitest';

test('renderiza el componente banner con logo, títulos y barra de búsqueda', async () => {
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
 expect(searchBar.exists()).toBe(true);

 const textInput = searchBar.find('.text-input');
 expect(textInput.exists()).toBe(true);

 const submitButton = searchBar.find('.submit-button');
 expect(submitButton.exists()).toBe(true);

 await wrapper.unmount();
});