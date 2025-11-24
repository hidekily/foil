import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tanstackViteConfig from '@tanstack/router-plugin/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tanstackViteConfig(),
    react(),
    tailwindcss(),
  ],
})
