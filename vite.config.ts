import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: './src/index.tsx'
    }
  },
  resolve: {
    alias: {
      '@': resolve(root, ''),
      '@assets': resolve(root, 'assets'),
      '@components': resolve(root, 'components'),
      '@types': resolve(root, 'types')
    }
  }
});
