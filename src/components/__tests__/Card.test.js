import { mount } from '@vue/test-utils';
import { useProductsStore } from '../../stores/productStore';
import Card from '../card/Card.vue';
import { test, expect, vi } from 'vitest';


vi.mock('../../stores/productStore', () => ({
 useProductsStore: () => ({
    products: [
      { id: 1, productName: 'Producto 1', price: 100, images: 'url-imagen-1' },
      { id: 2, productName: 'Producto 2', price: 200, images: 'url-imagen-2' },
   
    ],
    fetchProducts: vi.fn(),
 }),
}));

test('renderiza los productos correctamente', async () => {
 const wrapper = mount(Card);

 await wrapper.vm.$nextTick();

 const productCards = wrapper.findAll('.col-card');
 expect(productCards.length).toBe(2); // Ajustar el numero en base a la cantidad de productos que se vayan añadiendo

 await wrapper.unmount();


});