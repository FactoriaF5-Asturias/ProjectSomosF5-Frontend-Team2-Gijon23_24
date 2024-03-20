import { mount } from '@vue/test-utils';
import { useProductsStore } from '../../stores/productStore';
import Card
import { test, expect } from 'vitest';

jest.mock('../../stores/productStore', () => ({
 useProductsStore: () => ({
    products: [
      { id: 1, productName: 'Producto 1', price: 100, images: 'url-imagen-1' },
      { id: 2, productName: 'Producto 2', price: 200, images: 'url-imagen-2' },
    ],
    fetchProducts: jest.fn(),
 }),
}));

test('renderiza los productos correctamente', async () => {
 const wrapper = mount(Card);

 await wrapper.vm.$nextTick();

 const productCards = wrapper.findAll('.col-card');
 expect(productCards.length).toBe(2);

 const firstProductCard = productCards[0];
 expect(firstProductCard.find('.card-title').text()).toBe('Producto 1');
 expect(firstProductCard.find('.price').text()).toBe('100 €');
 expect(firstProductCard.find('img').attributes('src')).toBe('url-imagen-1');

 const secondProductCard = productCards[1];
 expect(secondProductCard.find('.card-title').text()).toBe('Producto 2');
 expect(secondProductCard.find('.price').text()).toBe('200 €');
 expect(secondProductCard.find('img').attributes('src')).toBe('url-imagen-2');

 expect(useProductsStore().fetchProducts).toHaveBeenCalled();
});