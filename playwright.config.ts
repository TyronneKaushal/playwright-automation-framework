import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  /* Test execution */
  timeout: 30000,
  expect: {
    timeout: 5000,
  },

  /* Run tests in parallel */
  fullyParallel: true,

  /* Retry only in CI */
  retries: process.env.CI ? 2 : 0,

  /* One worker in CI for stability */
  workers: process.env.CI ? 1 : undefined,

  /* Reports */
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
  ],

  /* Shared settings */
  use: {
    baseURL: process.env.BASE_URL,

    headless: true,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',

    /* SauceDemo uses data-test instead of data-testid */
    testIdAttribute: 'data-test',
  },

  /* Projects */
  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/,
    },

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});