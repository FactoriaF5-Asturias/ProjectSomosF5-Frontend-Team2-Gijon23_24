import { createApp } from 'vue';
import { mount } from '@vue/test-utils';
import Footer from '../Footer.vue';
import { test, expect } from 'vitest';

test('renderiza el componente footer con logo, enlaces de navegación y logos de pagos', async () => {
 const app = createApp({});
 const wrapper = mount(Footer, { app });

 const logo = wrapper.find('.logo');
 expect(logo.exists()).toBe(true);

 const navLinks = wrapper.findAll('.nav router-link');
 expect(navLinks.length).toBe(4);
 expect(navLinks[0].text()).toBe('Inicio');
 expect(navLinks[1].text()).toBe('Preguntas Frecuentes');
 expect(navLinks[2].text()).toBe('Sobre Nosotros');
 expect(navLinks[3].text()).toBe('Contacto');

 const paypalLogo = wrapper.find('.paypal-logo');
 expect(paypalLogo.exists()).toBe(true);
 const visaLogo = wrapper.find('.visa-logo');
 expect(visaLogo.exists()).toBe(true);

 const copyrightText = wrapper.find('.copyright');
expect(copyrightText.text()).toBe('© 2024 Equipo 2 Dreamfusion');

 await wrapper.unmount();
});