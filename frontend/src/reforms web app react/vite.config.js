import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8686,
    proxy: {
      '/api': 'http://localhost:8686'
    }
  }
})
