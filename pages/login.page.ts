import { Page, Locator } from '@playwright/test';

export default class LoginPage {
  readonly page: Page;
  readonly emailTextField: Locator;
  readonly passwordTextField: Locator;
  readonly loginBtn: Locator;
  readonly loginErrorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailTextField = page.locator("input[name='email']");
    this.passwordTextField = page.locator("input[name='password']");
    this.loginBtn = page.locator("button[type='submit']");
    this.loginErrorMessage = page.locator("[data-qa-id='error-display']");
  }

  async enterUsername(email: string) {
    await this.emailTextField.type(email);
  }

  async enterPassword(password: string) {
    await this.passwordTextField.type(password);
  }

  async clickLoginBtn() {
    await this.loginBtn.click();
  }

  async login(email: string, password: string) {
    await this.enterUsername(email);
    await this.enterPassword(password);
    await this.clickLoginBtn();
  }
}
