import { mount } from '@vue/test-utils';
import SuccessPopup from '../alerts/SuccessPopup.vue';

test('renders the success message when "show" prop is true', async () => {
  const wrapper = mount(SuccessPopup, {
    props: { show: true, message: 'Success!' },
  });

  expect(wrapper.text()).toContain('Success!');
});

test('does not render the success message when "show" prop is false', async () => {
  const wrapper = mount(SuccessPopup, {
    props: { show: false, message: 'Success!' },
  });

  expect(wrapper.text()).not.toContain('Success!');
});