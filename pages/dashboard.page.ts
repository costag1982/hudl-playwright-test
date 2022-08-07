import { Locator, Page } from '@playwright/test';

export default class DashboardPage {
  readonly page: Page;
  readonly eleTeamName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.eleTeamName = page.locator(
      'div.hui-primaryteamswitcher > a > div.hui-primaryteamswitcher__display-name > span'
    );
  }
}
