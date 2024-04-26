import { mount } from '@vue/test-utils';
import AdminProfile from '../profiles/admin/AdminProfile.vue';
test('renders AdminProfile component correctly', async () => {
  const wrapper = mount(AdminProfile);

  expect(wrapper.html()).toBeTruthy();
});