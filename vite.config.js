
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/amitk/',  // Add this line for GitHub Pages deployment
  plugins: [react()],
})
