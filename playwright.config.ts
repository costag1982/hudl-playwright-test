import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 5 * 60 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: false,
  retries: 1,
  reporter: [[process.env.CI === 'true' ? 'github' : 'html', { open: 'never' }]],
  use: {
    headless: process.env.CI === 'true',
    channel: 'chrome',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 0,
    baseURL: process.env.BASE_URL,
    trace: 'retain-on-failure',
    launchOptions: {
      slowMo: 0
    }
  },
  grep: [new RegExp('@login')]
};

export default config;
