import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // UsePolling true karne se Vite har badlaav ko actively force-detect karega
      usePolling: true, 
    },
    // Agar future me network access chahiye ho to host enable rakhein
    host: true, 
  },
})