import { defineConfig } from '@playwright/test'

export default defineConfig({
  use: {
    baseURL: 'https://demo.applitools.com/',
  },

  reporter: 'list',
  outputDir: 'test-results',
  timeout: 30000,
})
