import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hito_1_pizzeria_m_ordaz/', // ej: '/hito_1_pizzeria_m_ordaz/'
})

