import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  name: "portfolio",
  homepage: "https://RayTurk.github.io/portfolio",
  scripts: {
    predeploy: "npm run build",
    deploy: "gh-pages -d dist"
  },
  base: '/portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },


})