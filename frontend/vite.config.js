import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const backendUrl = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_PORT}` || 'http://localhost:3000';

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy:{
      '/api': backendUrl, // Adjust the port if your backend server runs on a different port
    },
  },
  plugins: [react()],
})
