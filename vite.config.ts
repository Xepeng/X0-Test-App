import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rollupNodePolyFill from 'rollup-plugin-polyfill-node';

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
    'process.env': {}, // to avoid other common runtime errors
  },
  resolve: {
    alias: {
      util: 'util/',            // ✅ MUST include slash
      process: 'process/browser',
      buffer: 'buffer',
    },
  },
  optimizeDeps: {
    include: ['util', 'process', 'buffer'],
  },
  build: {
    rollupOptions: {
      plugins: [rollupNodePolyFill()],
    },
  },
});
