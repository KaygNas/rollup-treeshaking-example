import {defineConfig} from 'vite'

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('src')) return 'index'
            else return 'vendor'
          }
        }
      },
      minify: false
    }
  }
})