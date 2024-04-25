import { mount } from 'vite-plugin-vue-test-utils';
import LogOutAlert from '../alerts/LogOutAlert.vue';

describe('LogOutAlert', () => {
  it('renders when show prop is true', async () => {
    const wrapper = mount(LogOutAlert, {
      props: {
        show: true,
      },
    });

    // Verifica que el componente esté visible cuando show es true
    expect(wrapper.isVisible()).toBe(true);
  });

  it('emits cancel event when "No" button is clicked', async () => {
    const wrapper = mount(LogOutAlert, {
      props: {
        show: true,
      },
    });

    // Simula el clic en el botón "No"
    await wrapper.find('button[data-testid="no-button"]').trigger('click');

    // Verifica que se haya emitido el evento "cancel"
    expect(wrapper.emitted('cancel')).toBeTruthy();
  });

  it('emits cancel event and calls userLogout when "Sí" button is clicked', async () => {
    const wrapper = mount(LogOutAlert, {
      props: {
        show: true,
      },
    });

    // Espía el método userLogout
    const userLogoutSpy = jest.spyOn(wrapper.vm, 'userLogout');

    // Simula el clic en el botón "Sí"
    await wrapper.find('button[data-testid="yes-button"]').trigger('click');

    // Verifica que se haya emitido el evento "cancel"
    expect(wrapper.emitted('cancel')).toBeTruthy();

    // Verifica que el método userLogout haya sido llamado
    expect(userLogoutSpy).toHaveBeenCalled();
  });
});