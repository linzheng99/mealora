import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: 5173,
      strictPort: true,
      proxy: {
        // A same-origin proxy avoids a separate permissive CORS policy in development.
        '/api': { target: env.API_PROXY_TARGET || 'http://localhost:8080' },
      },
    },
  }
})
