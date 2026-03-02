import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  // base: '/platinum-zenith/', // Only needed for GH Pages
  plugins: [react(), tailwindcss(), visualizer({ filename: 'bundle-stats.html', gzipSize: true })],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    // Code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
        },
      },
    },
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true },
    },
    // Chunk size warning
    chunkSizeWarningLimit: 200,
  },
})
