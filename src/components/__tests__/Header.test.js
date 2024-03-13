import { createApp } from 'vue';
import { mount } from 'vitest';
import Header from '../general/Header.vue';

test('renders header component with logo, actions, and navigation links', async () => {
  const app = createApp({});

  const wrapper = mount(Header, { app });

  const logo = wrapper.find('img[src="/images/logotype.png"]');
  expect(logo.exists()).toBe(true);

  const favoriteLink = wrapper.find('router-link[to="/"] p:contains(Favoritos)');
  const cartLink = wrapper.find('router-link[to="/about"] p:contains(Carrito)');
  expect(favoriteLink.exists()).toBe(true);
  expect(cartLink.exists()).toBe(true);

  const headerButtons = wrapper.findComponent({ ref: 'HeaderButtons' });
  expect(headerButtons.exists()).toBe(true);

  const homeLink = wrapper.find('nav router-link[to="/"]:contains(Inicio)');
  const aboutLink = wrapper.find('nav router-link[to="/about"]:contains(Litofanía)');

  expect(homeLink.exists()).toBe(true);
  expect(aboutLink.exists()).toBe(true);

  await wrapper.unmount();
});