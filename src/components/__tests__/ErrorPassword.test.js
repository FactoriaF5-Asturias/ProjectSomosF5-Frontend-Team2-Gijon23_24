import { mount } from '@vue/test-utils';
import ErrorPassword from '../alerts/ErrorPassword.vue';

describe('ErrorPassword', () => {
  it('renders when show prop is true', async () => {
    const wrapper = mount(ErrorPassword, {
      props: {
        message: 'Test error message',
        show: true,
      },
    });

    expect(wrapper.isVisible()).toBe(true);
  });
});