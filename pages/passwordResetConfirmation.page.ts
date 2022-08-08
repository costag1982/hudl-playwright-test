import { Page, Locator } from '@playwright/test';

export default class passwordResetConfirmation {
  readonly page: Page;
  readonly confirmationHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.confirmationHeader = page.locator("//h3[text()='Check Your Email']");
  }
}
