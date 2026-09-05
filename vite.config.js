import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalized = id.replace(/\\/g, '/');
          if (normalized.includes('node_modules')) {
            if (normalized.includes('/three/')) {
              return 'vendor-three';
            }
            if (normalized.includes('/gsap/')) {
              return 'vendor-gsap';
            }
            if (normalized.includes('/lucide-react/')) {
              return 'vendor-icons';
            }
            if (
              normalized.includes('/react/') ||
              normalized.includes('/react-dom/') ||
              normalized.includes('/react-router') ||
              normalized.includes('/@remix-run/')
            ) {
              return 'vendor-react';
            }
          }
        },
      },
    },
  },
})
