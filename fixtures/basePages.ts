import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';
import NavPage from '../pages/nav.page';
import DashboardPage from '../pages/dashboard.page';

import { test as baseTest } from '@playwright/test';

type pages = {
  loginPage: LoginPage;
  homePage: HomePage;
  navPage: NavPage;
  dashboardPage: DashboardPage;
};

const test = baseTest.extend<pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  navPage: async ({ page }, use) => {
    await use(new NavPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  }
});

export default test;
export const expect = test.expect;
