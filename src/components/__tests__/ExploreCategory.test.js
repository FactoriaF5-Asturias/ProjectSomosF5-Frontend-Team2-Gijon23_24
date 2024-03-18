import { mount } from '@vue/test-utils';
import ExploreCategory from '../ExploreCategory.vue';
import { test, expect } from 'vitest';

test('renderiza el componente ExploreCategory con la estructura esperada', async () => {
 const wrapper = mount(ExploreCategory);

 const title = wrapper.find('.text-center');
 expect(title.exists()).toBe(true);
 expect(title.text()).toBe('Explora nuestras categorías');

 const imageContainer = wrapper.find('.contenedor_imagenes');
 expect(imageContainer.exists()).toBe(true);

 const images = imageContainer.findAll('.imagen');
 expect(images.length).toBe(3);

 images.forEach((image, index) => {
    const title = image.find('.category_title');
    expect(title.exists()).toBe(true);
    const expectedTitles = ['Litofanias', 'Hogar', 'Geek'];
    expect(title.text()).toBe(expectedTitles[index]);
 });

 await wrapper.unmount();
});