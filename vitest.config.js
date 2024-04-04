import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import path from 'path';


export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: 'jsdom', // Configura Vitest para usar jsdom
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
 },
});



