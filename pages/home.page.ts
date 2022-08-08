import { Page, Locator } from '@playwright/test';

export default class HomePage {
  readonly page: Page;
  readonly acceptCookieButton: Locator;
  readonly skipNavLInk: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookieButton = page.locator("'Accept All Cookies'");
    this.skipNavLInk = page.locator("'Skip to main content'");
  }

  async clickAcceptCookiesButton() {
    if (process.env.CI === 'false') {
      await this.acceptCookieButton.click();
    }
  }

  async visit() {
    await this.page.goto('/');
    await this.clickAcceptCookiesButton();

    if (process.env.CI === 'false') {
      await this.skipNavLInk.click();
    }
  }
}
