import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables based on the mode (development, production)
  const env = loadEnv(mode, process.cwd(), '');

  // Set the proxy target to your local backend server
  const proxyTarget = `${env.VITE_BACKEND_URL || 'http://localhost'}:${env.VITE_PORT || 3000}`;

  return {
    server: {
      proxy: {
        // Proxy requests starting with /api to your backend
        '/api': {
          target: proxyTarget,
          changeOrigin: true, // Necessary for virtual-hosted sites
        },
      },
    },
    plugins: [react()],
  };
});