import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins:[react()],
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    environment:"jsdom",
    globals: true
  }
})
