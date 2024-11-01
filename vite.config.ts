import { resolve } from 'path';
import { defineConfig, PluginOption } from 'vite';
import reactRefresh from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

function rewriteSlashToIndexHtml(): PluginOption {
  return {
    name: 'rewrite-slash-to-index-html',
    apply: 'serve',
    enforce: 'post',
    configureServer(server:any) {
      // rewrite / as index.html
      server.middlewares.use('/TCC-TI/', (req:any, _:any, next:any) => {
        if (req.url === '/TCC-TI/') {
          req.url = '/index.html'
        }
        next()
      })
    },
  }
}

export default defineConfig({
  appType: 'mpa', 
  base: "/TCC-TI/",
  root,
  plugins: [reactRefresh(), rewriteSlashToIndexHtml()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'Sobre-Nos', 'index.html'),
        contact: resolve(root, 'Contato', 'index.html'),
        error: resolve(root, 'Erro', 'index.html'),

      }
    }
  },
})
