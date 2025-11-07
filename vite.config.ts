/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Extend Vite config type to include test configuration
type ViteConfigWithTest = Parameters<typeof defineConfig>[0] & {
  test: {
    globals: boolean
    environment: string
    setupFiles: string[]
    css: boolean
    coverage: {
      provider: string
      reporter: string[]
      include: string[]
      exclude: string[]
    }
  }
}

const config: ViteConfigWithTest = {
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'node_modules/**',
        'dist/**',
        'src/setupTests.ts',
        'src/**/*.d.ts',
        'src/**/*.test.{ts,tsx}'
      ],
    },
  },
} as const

export default defineConfig(config)