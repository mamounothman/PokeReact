/// <reference types="vitest" />

import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    alias: [
      {
        find: "react-redux/es/exports",
        replacement: path.resolve(__dirname, "./node_modules/react-redux/lib/exports"),
      },
    ],
  },
})
