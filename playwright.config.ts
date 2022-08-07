import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  // timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: false,
  retries: 0,
  reporter: [['html', { open: 'never' }]],
  use: {
    headless: false,
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