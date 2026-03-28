import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** Repo name for GitHub project Pages: https://<user>.github.io/<repo>/ */
const GITHUB_REPO = 'portfolio'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? `/${GITHUB_REPO}/` : '/',
}))
