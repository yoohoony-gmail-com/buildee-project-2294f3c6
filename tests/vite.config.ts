import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    // A setup file is recommended for configuring testing-library/jest-dom,
    // but omitted here to adhere to the 3-file limit for this phase.
    // setupFiles: './src/test/setup.ts',
    exclude: [...configDefaults.exclude, 'e2e/**'],
  },
});