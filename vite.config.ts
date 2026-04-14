import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

function resolveBase() {
  if (process.env.VITE_BASE_PATH) {
    return process.env.VITE_BASE_PATH
  }

  if (process.env.GITHUB_ACTIONS === 'true') {
    const owner = process.env.GITHUB_REPOSITORY_OWNER
    const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]

    if (owner && repository) {
      return repository === `${owner}.github.io` ? '/' : `/${repository}/`
    }
  }

  return '/'
}

export default defineConfig({
  base: resolveBase(),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        tagdeer: path.resolve(__dirname, 'projects/tagdeer-platform/index.html'),
        tahkeem: path.resolve(__dirname, 'projects/tahkeem-case-lifecycle/index.html'),
        hyperpay: path.resolve(__dirname, 'projects/ngx-hyperpay/index.html'),
      },
    },
  },
})
