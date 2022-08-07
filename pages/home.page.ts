import { Page, Locator } from '@playwright/test';

export default class HomePage {
  readonly page: Page;
  readonly acceptCookieButton: Locator;
  readonly skipNavLInk: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookieButton = page.locator('#onetrust-accept-btn-handler');
    this.skipNavLInk = page.locator("'Skip to main content'");
  }

  async clickAcceptCookiesButton() {
    await this.acceptCookieButton.click();
  }

  async visit() {
    await this.page.goto('/');
    await this.clickAcceptCookiesButton();

    await this.skipNavLInk
      .click() //this link does not always appear so even though its in the dom
      .then(() => {
        // element is clicked continue.
      })
      .catch((e) => {
        // do not fail test if element is not clickable.
      });
  }
}
