import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FactoriaAlert from '../alerts/FactoriaAlert.vue';
describe('FactoriaAlert', () => {
 it('renders the alert correctly', () => {
    const wrapper = mount(FactoriaAlert);

    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('p').text()).toBe('"Este sitio es solo para fines educativos. No ingrese información personal o realice pagos aquí"');
 });
});