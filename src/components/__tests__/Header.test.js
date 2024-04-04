import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import Header from '../general/Header.vue';
import HeaderButtons from '../general/header/HeaderButtons.vue';
import LoggedProfile from '../general/header/LoggedProfile.vue';
import { useAuthStore } from '@/stores/AuthStore';

const pinia = createPinia();
vi.mock('./../../stores/AuthStore', () => ({
 useAuthStore: vi.fn().mockReturnValue({
   isAuthenticated: false,
 }),
}));

describe('Header', () => {
 it('renders the header correctly', () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [pinia],
      },
    });

    expect(wrapper.find('#logotype_container').exists()).toBe(true);
    expect(wrapper.find('router-link[to="/favorites"]').exists()).toBe(true);
    expect(wrapper.find('router-link[to="/cart"]').exists()).toBe(true);
    expect(wrapper.findComponent(HeaderButtons).exists()).toBe(true);
    expect(wrapper.findComponent(LoggedProfile).exists()).toBe(false);
 });

 it('handles authentication state', async () => {
    useAuthStore.mockReturnValue({
      isAuthenticated: true,
    });

    const wrapper = mount(Header, {
      global: {
        plugins: [pinia],
      },
    });

    expect(wrapper.findComponent(HeaderButtons).exists()).toBe(false);
    expect(wrapper.findComponent(LoggedProfile).exists()).toBe(true);
 });
});