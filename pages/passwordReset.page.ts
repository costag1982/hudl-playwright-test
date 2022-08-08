import { Page, Locator } from '@playwright/test';

export default class PasswordResetPage {
  readonly page: Page;
  readonly emailTextField: Locator;
  readonly passwordResetButton: Locator;
  readonly passwordResetError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailTextField = page.locator("input[name='email']");
    this.passwordResetButton = page.locator("'Send Password Reset'");
    this.passwordResetError = page.locator("[data-qa-id='password-reset-error-display']");
  }

  async enterEmail(email: string) {
    await this.emailTextField.fill(email);
  }

  async clickPasswordResetButton() {
    await this.passwordResetButton.click();
  }
}
