import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** User site: https://<user>.github.io/ (repo <user>.github.io) */
// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    command === 'build' && {
      name: 'emit-nojekyll',
      closeBundle() {
        writeFileSync(resolve('dist', '.nojekyll'), '')
      },
    },
  ].filter(Boolean),
  base: '/',
}))
