import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import CarouselCard from '@/components/card/CarouselCard.vue';
import { useProductsStore } from '@/stores/productStore';
import ImagesService from '@/services/ImagesService';
import { ref } from 'vue';

// Mock de useProductsStore
vi.mock('@/stores/productStore', () => ({
  useProductsStore: () => ({
    products: ref([]), // Aquí puedes proporcionar los productos que necesites para tus pruebas
  }),
}));

// Mock de ImagesService
vi.mock('@/services/ImagesService', () => ({
  default: () => ({
    findImageForProduct: () => 'http://example.com/image1.jpg',
  }),
}));

describe('CarouselCard.vue', () => {
  let product;

  beforeEach(() => {
    product = {
      productName: 'Product Name',
      price: 100,
      images: [
        { mainImage: true, imageName: 'image1.jpg' },
        { mainImage: false, imageName: 'image2.jpg' },
        // Agrega más imágenes según sea necesario para tus pruebas
      ],
    };
  });

  it('renders product details correctly', () => {
    const wrapper = mount(CarouselCard, {
      props: { product },
    });

    expect(wrapper.find('.card-title').textContent).toBe(product.productName);
    expect(wrapper.find('.price').textContent).toBe(`${product.price} €`);
  });

  it('renders product image correctly', async () => {
    const wrapper = mount(CarouselCard, {
      props: { product },
    });

    await vi.nextTick();

    expect(wrapper.find('img').getAttribute('src')).toBe('http://example.com/image1.jpg');
  });

  // Puedes agregar más pruebas según sea necesario para tu componente
});