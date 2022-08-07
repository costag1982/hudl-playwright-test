import { Page, Locator } from '@playwright/test';

export default class NavPage {
  readonly page: Page;
  readonly eleloginLink: Locator;
  readonly eleloggedInName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.eleloginLink = page.locator("[data-qa-id='login']");

    // I would add a test-id here eg. [data-test-id='loggedInName']
    this.eleloggedInName = page.locator("//span[text()='Costa G']");
  }

  async clickLoginBtn() {
    await this.eleloginLink.click();
  }
}
