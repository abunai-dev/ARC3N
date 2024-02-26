import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'script',
    lib: {
      name: 'getUncertainties',
      entry: 'src/scripts/getUncertainties.ts'
    },
    emptyOutDir: false
  }
})
