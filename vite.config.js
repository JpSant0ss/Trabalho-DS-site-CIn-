import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/~jpmcs/', // Substitua SEU_LOGIN pelo seu login do CIn (ex: /~kiev/)
})