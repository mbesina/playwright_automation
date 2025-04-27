import { defineConfig } from '@playwright/test'
import * as dotenv from "dotenv"
dotenv.config();

export default defineConfig({
  use: {
    baseURL: process.env.BASEURL,
  },

  reporter: 'list',
  outputDir: 'test-results',
  timeout: 30000,

  projects: [
    {
      name: "testChromium",
      use: {
        browserName: "chromium",
      },
    }
  ],
})
