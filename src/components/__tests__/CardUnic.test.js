import { mount } from '@vue/test-utils';
import CardUnic from '../card/CardUnic.vue';
describe('CardUnic', () => {
 it('debería renderizar correctamente y mostrar la imagen y el precio del producto', async () => {
    const product = {
      productName: 'Producto de prueba',
      price: 100,
      images: [
        { imageName: 'mocked-image-name.jpg', mainImage: true },
      ],
    };

    const wrapper = mount(CardUnic, {
      props: {
        product,
      },
    });

    expect(wrapper.find('.v-card-title').text()).toContain(product.productName);
    expect(wrapper.find('.price').text()).toContain(`${product.price} €`);
 });
});