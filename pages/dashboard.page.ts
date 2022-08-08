import { Locator, Page } from '@playwright/test';

export default class DashboardPage {
  readonly page: Page;
  readonly eleTeamName: Locator;

  constructor(page: Page) {
    this.page = page;
    // this also returns single element but is ugly 'div.hui-primaryteamswitcher > a > div.hui-primaryteamswitcher__display-name > span'
    this.eleTeamName = page.locator('span', { hasText: 'Newcastle Jets FC' }).first();
  }
}
