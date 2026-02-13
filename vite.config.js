import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Base URL for Custom Domain - set to '/' for root domain deployments
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
