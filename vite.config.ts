import {defineConfig} from 'vite'

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('yapi')) return 'yapi'
            if (id.includes('frontend-shared-api')) return 'frontend-shared-api'
          }
        }
      },
      minify: false
    }
  }
})