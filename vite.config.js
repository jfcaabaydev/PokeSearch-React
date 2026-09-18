import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// This checks if we are running 'npm run deploy' (production) or 'npm run dev' (development)
export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? '/PokeSearch-React/' : '/',
    plugins: [react()],
  }
})
