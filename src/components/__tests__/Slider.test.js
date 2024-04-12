import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Slider from '../Slider.vue';
import CarouselCard from '../card/CarouselCard.vue';
import { useProductsStore } from '@/stores/productStore';
import { ref } from 'vue';

vi.mock('@/stores/productStore', () => ({
  useProductsStore: vi.fn(),
}));

describe('Slider.vue', () => {
  let products;

  beforeEach(() => {
    products = ref([
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' },
    ]);
    useProductsStore.mockReturnValue({ fetchProducts: vi.fn(), products });
  });

  it('renders correct number of CarouselCards', async () => {
    const wrapper = mount(Slider);

    await wrapper.vm.$nextTick();

    const carouselCards = wrapper.findAllComponents(CarouselCard);

    expect(carouselCards.length).toBe(products.value.length);
  });

});