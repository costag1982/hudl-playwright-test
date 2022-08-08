import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  // timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: false,
  retries: 1,
  reporter: [['html', { open: 'never' }]],
  use: {
    launchOptions: {
      slowMo: process.env.CI === 'true' ? 150 : 0
    },
    headless: process.env.CI === 'true',
    channel: 'chrome',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 0,
    baseURL: 'https://www.hudl.com',
    trace: 'retain-on-failure'
  },
  grep: [new RegExp('@login')]
};

export default config;
