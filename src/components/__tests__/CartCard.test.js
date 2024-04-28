import { mount } from '@vue/test-utils';
import CartCard from '../payments/stripe/CartCard.vue';

test('renders the product name, description, price, and count correctly', async () => {
  const product = {
    productName: 'Product Name',
    productDescription: 'Product Description',
    price: 10.99,
  };
  const count = 3;

  const wrapper = mount(CartCard, {
    props: { product, count },
  });

  expect(wrapper.text()).toContain(product.productName);

 
  expect(wrapper.text()).toContain(product.productDescription);


  expect(wrapper.text()).toContain(`${product.price}`);

  
  expect(wrapper.text()).toContain(`${count}`);
});