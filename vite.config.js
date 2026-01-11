import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  
  // ✅ VERCEL PRODUCTION - Proxy API calls to backend
  server: {
    proxy: {
      '/api': {
        target: 'https://gp-backend-ddgp.onrender.com',
        changeOrigin: true,
        secure: true
      }
    }
  },
  
  // ✅ VERCEL BUILD OUTPUT
  build: {
    outDir: 'dist'
  },
  
  // ✅ ENVIRONMENT VARIABLES
  define: {
    'import.meta.env.VITE_API_URL': JSON.stringify('https://gp-backend-ddgp.onrender.com')
  }
})
