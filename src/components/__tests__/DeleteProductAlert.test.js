import { mount } from '@vue/test-utils';
import DeleteProductAlert from '../alerts/DeleteProductAlert.vue';

describe('DeleteProductAlert.vue', () => {
  it('renders correctly with given props', async () => {
    // Props
    const show = true;
    const product = {
      id: 1,
      productName: 'Producto de prueba'
    };

  
    const wrapper = mount(DeleteProductAlert, {
      props: {
        show,
        product
      }
    });

   
    expect(wrapper.text()).toContain('¿Seguro que desea borrar "Producto de prueba"?');

 
    await wrapper.find('button:nth-of-type(1)').trigger('click');

  
    expect(wrapper.emitted('cancel')).toBeTruthy();
  });
});