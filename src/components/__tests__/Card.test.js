import { mount } from '@vue/test-utils';
import Card from '../card/Card.vue';
describe('Card.vue', () => {
 it('renders the product name and price', async () => {
    const product = {
      id: 1,
      productName: 'Test Product',
      price: 100,
      images: [
        { mainImage: true, imageName: 'test-image.jpg' },
      ],
    };

    const wrapper = mount(Card, {
      props: {
        product,
      },
    });

    await wrapper.vm.$nextTick(); // Espera a que se actualice el DOM

    expect(wrapper.find('.product-name').text()).toBe(product.productName);
    expect(wrapper.find('.price').text()).toBe(`${product.price} €`);
 });

 it('renders the default image if no main image is provided', async () => {
    const product = {
      id: 1,
      productName: 'Test Product',
      price: 100,
      images: [],
    };

    const wrapper = mount(Card, {
      props: {
        product,
      },
    });

    await wrapper.vm.$nextTick(); 

  
    expect(wrapper.find('.image').attributes('style')).toContain('placeholder-image.jpg');
 });


});