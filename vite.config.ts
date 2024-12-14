import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/absproxy/3000/',
  server: {
    port: 3000,
    strictPort: true,
    hmr: {
      path: 'ws',
      clientPort: 443,
      protocol: 'wss'
    }
  }
})