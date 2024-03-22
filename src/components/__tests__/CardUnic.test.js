import { mount } from '@vue/test-utils';
import { test, vi } from 'vitest';
import CardUnic from '../card/CardUnic.vue';
import { useProductsStore } from '../../stores/productStore';

vi.mock('../../services/ImagesService', async () => {
 const actual = await vi.importActual('../../services/ImagesService');
 return {
    default: vi.fn().mockImplementation(() => ({
 
    })),
    ...actual,
 };
});

vi.mock('../../stores/productStore', async () => {
 const actual = await vi.importActual('../../stores/productStore');
 return {
    default: vi.fn().mockImplementation(() => ({
      products: [],
      isLoaded: false,
      fetchProducts: vi.fn().mockResolvedValue(true),
    })),
    ...actual,
 };
});

test('renders CardUnic component correctly', async () => {
 const wrapper = mount(CardUnic, {
    props: {
      product: {
        id: 1,
        images: [{ mainImage: true, imageName: 'image1.jpg' }],
        productName: 'Test Product',
        price: 100,
      },
    },
 });


 expect(wrapper.find('.v-card-title').text()).toBe('Test Product');
 expect(wrapper.find('.price').text()).toBe('100 €');


});