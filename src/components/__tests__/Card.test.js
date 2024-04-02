import { mount } from '@vue/test-utils';
import { test, vi } from 'vitest';
import Card from '../card/Card.vue';
import { useProductsStore } from '@/stores/productStore';


vi.mock('../card/Card.vue', () => ({
 ImagesService: jest.fn().mockImplementation(() => ({
 })),
}));

vi.mock('@/stores/productStore', () => ({
 useProductsStore: jest.fn().mockImplementation(() => ({
    products: [],
    isLoaded: false,
    fetchProducts: jest.fn().mockResolvedValue(true),
 })),
}));

test('renders CardUnic components conditionally based on isLoaded', async () => {
 const wrapper = mount(Card);

 const productsStore = useProductsStore();
 productsStore.products = [{ id: 1, images: [{ mainImage: true, imageName: 'image1.jpg' }] }];
 productsStore.isLoaded = true;

 await wrapper.vm.$nextTick();

 expect(wrapper.findComponent({ name: 'CardUnic' }).exists()).toBe(true);
});