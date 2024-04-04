import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const SERVER_URL = 'http://localhost:3000' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: { 
      // это место назначения, на которое будут перенаправляться запросы 
      '^/api/*': { 
        target: SERVER_URL, 
        changeOrigin: true, 
        secure: false, 
      }
    }
  }
});
