import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Reto-Ganchos/', // ¡Nombre exacto de tu repositorio!
})
