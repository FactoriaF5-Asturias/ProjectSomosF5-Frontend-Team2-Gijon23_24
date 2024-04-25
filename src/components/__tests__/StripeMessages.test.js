import { mount } from '@vue/test-utils';
import StripeMessages from '../payments/stripe/StripeMessages.vue';

test('renders messages with payment intent links', async () => {
  const messages = [
    'Payment failed pi_123456',
    'Payment successful pi_789012',
  ];

  const wrapper = mount(StripeMessages, {
    props: { messages },
  });

  expect(wrapper.html()).toContain('Payment failed');
  expect(wrapper.html()).toContain('Payment successful');

  const links = wrapper.findAll('a');
  expect(links.length).toBe(2);

  expect(links[0].text()).toBe('pi_123456');
  expect(links[0].attributes('href')).toBe(
    'https://dashboard.stripe.com/test/payments/pi_123456'
  );

  expect(links[1].text()).toBe('pi_789012');
  expect(links[1].attributes('href')).toBe(
    'https://dashboard.stripe.com/test/payments/pi_789012'
  );
});

test('renders messages without payment intent links', async () => {
  const messages = ['An error occurred'];

  const wrapper = mount(StripeMessages, {
    props: { messages },
  });

  expect(wrapper.html()).toContain('An error occurred');

  const links = wrapper.findAll('a');
  expect(links.length).toBe(0);
});