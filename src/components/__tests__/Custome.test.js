import { mount } from '@vue/test-utils';
import Custom from '../Custom.vue';
import { test, expect } from 'vitest';

test('renderiza el componente Custome con el título y secciones esperadas', async () => {
 const wrapper = mount(Custom);

 const title = wrapper.find('h1');
 expect(title.exists()).toBe(true);
 expect(title.text()).toBe('IMPRESION PERSONALIZADA EN 3D');

 const leftSection = wrapper.find('.left-section');
 expect(leftSection.exists()).toBe(true);
 const rightSection = wrapper.find('.right-section');
 expect(rightSection.exists()).toBe(true);

 const ctaButton = leftSection.find('.cta-button');
 expect(ctaButton.exists()).toBe(true);
 expect(ctaButton.text()).toBe('Envíanos tu modelo');

 const infoBoxes = rightSection.findAll('.info-box');
 expect(infoBoxes.length).toBe(3);

 expect(infoBoxes[0].text()).toContain('Envíanos tu modelo');
 expect(infoBoxes[1].text()).toContain('Lo creamos');
 expect(infoBoxes[2].text()).toContain('Le damos el mejor acabado');

 await wrapper.unmount();
});