import { mount } from '@vue/test-utils';
import AddButton from '../admin-dashboard-components/AddButton.vue';
import { test, expect } from 'vitest';
import AddForm from '../admin-dashboard-components/AddForm.vue';

test('muestra y oculta el formulario al hacer clic en el botón', async () => {
 const wrapper = mount(AddButton);

 expect(wrapper.findComponent(AddForm).exists()).toBe(false);

 await wrapper.find('button').trigger('click');

 expect(wrapper.findComponent(AddForm).exists()).toBe(true);

 await wrapper.findComponent(AddForm).find('button[type="button"]').trigger('click');

 expect(wrapper.findComponent(AddForm).exists()).toBe(false);
});