import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import CardUnic from '../card/CardUnic.vue'
describe('CardUnic', () => {
 it('renders the component', () => {
    const pinia = createPinia()

    const wrapper = mount(CardUnic, {
      global: {
        plugins: [pinia],
      },
      props: {
        product: { productName: 'Nombre del producto' },
      },
      data() {
        return {
          showImage: true,
        }
     },
    })

    expect(wrapper.find('v-img').exists()).toBe(true)
    expect(wrapper.find('v-img').attributes('alt')).toBe('Nombre del producto')
 })

 it('handles click events', async () => {
    const pinia = createPinia()

    const wrapper = mount(CardUnic, {
      global: {
        plugins: [pinia],
      },
      props: {
        product: { productName: 'Nombre del producto' },
      },
    })

    const button = wrapper.find('.heart')
    await button.trigger('click')

 })
})