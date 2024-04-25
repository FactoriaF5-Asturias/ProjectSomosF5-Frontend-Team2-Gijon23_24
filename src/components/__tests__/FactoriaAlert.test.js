import { mount } from '@vue/test-utils';
import FactoriaAlert from '../alerts/FactoriaAlert.vue';


describe('FactoriaAlert.vue', () => {
 it('renders the alert message correctly', () => {
    const wrapper = mount(FactoriaAlert);

   
    const alertMessage = wrapper.find('p');
    expect(alertMessage.text()).toBe('"Este sitio es solo para fines educativos. No ingrese información personal ni realice pagos aquí."');

    
    const alertImage = wrapper.find('img');
    expect(alertImage.attributes('src')).toBe('/images/factoria5-logo.png');
 });
});