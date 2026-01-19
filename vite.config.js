import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Base URL for GitHub Pages - change 'Pratibhaviora' to your repo name
  base: '/Pratibhaviora/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
