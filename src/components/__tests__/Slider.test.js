import { createApp } from 'vue';
import { mount } from '@vue/test-utils';
import Slider from '../Slider.vue';

describe('Slider.vue', () => {
  it('renderiza correctamente los productos', async () => {
    const products = [
      { id: 1, name: 'Producto 1', price: 10 },
      { id: 2, name: 'Producto 2', price: 20 },
      { id: 3, name: 'Producto 3', price: 30 }
    ];

    const useProductsStore = () => ({
      products: ref(products),
      fetchProducts: jest.fn()
    });

    const app = createApp({
      components: { Slider },
      setup() {
        return { useProductsStore };
      },
      template: '<Slider />'
    });

    const wrapper = await mount(app);

    await wrapper.vm.$nextTick();
  });
});