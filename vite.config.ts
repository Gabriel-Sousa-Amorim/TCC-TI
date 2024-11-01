import { resolve } from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  plugins: [reactRefresh()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'Sobre-Nos', 'index.html'),
        contact: resolve(root, 'Contato', 'index.html'),
        error: resolve(root, 'error', 'index.html'),

      }
    }
  },
  base: "/TCC-TI/",
})
