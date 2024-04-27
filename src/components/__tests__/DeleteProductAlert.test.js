import { mount } from '@vue/test-utils';
import DeleteProductAlert from '../alerts/DeleteProductAlert.vue';
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from '@/App.vue';
import { useProductsStore } from '@/stores/productStore';

describe('DeleteProductAlert.vue', () => {
  it('renders correctly with given props', async () => {
    // Props
    const pinia = createPinia()
    const app = createApp(App)
    app.use(pinia)
    const show = true;
    const product = {
      id: 1,
      productName: 'Producto de prueba'
    };
    const store = useProductsStore()

  
    const wrapper = mount(DeleteProductAlert, {
      props: {
        store,
        show,
        product
      }
    });

   
    expect(wrapper.text()).toContain('¿Seguro que desea borrar "Producto de prueba"?');

 
    await wrapper.find('button:nth-of-type(1)').trigger('click');

  
    expect(wrapper.emitted('cancel')).toBeTruthy();
  });
});