import test, { expect } from '../fixtures/basePages';
import * as data from '../data/user.json';

test.describe('User login tests @login', () => {
  test('Successful Login', async ({ loginPage, homePage, dashboardPage, navPage, page }) => {
    // await test.step('Log in', async () => {
    //   // ...
    // });

    await homePage.visit();
    expect(await page.title()).toBe('Hudl: We Help Teams and Athletes Win');

    await navPage.clickLoginBtn();
    expect(await page.title()).toBe('Log In - Hudl');

    await loginPage.enterUsername(data.email);
    await loginPage.enterPassword(data.password);
    await loginPage.clickLoginBtn();

    await expect(navPage.eleloggedInName).toHaveText('Costa G');

    expect(page.url()).toContain('/home');

    await expect(dashboardPage.eleTeamName).toHaveText('Newcastle Jets FC');

    // expect(await page.screenshot({
    //   fullPage: true
    // })).toMatchSnapshot("letcode.png")
  });

  test('Unsuccessful Login - no details input', async ({ loginPage, homePage, navPage, page }) => {
    await homePage.visit();
    expect(await page.title()).toBe('Hudl: We Help Teams and Athletes Win');

    await navPage.clickLoginBtn();
    expect(await page.title()).toBe('Log In - Hudl');

    await loginPage.clickLoginBtn();

    await expect(loginPage.loginErrorMessage).toHaveText("We didn't recognize that email and/or password.Need help?");
    await expect(loginPage.loginBtn).toBeDisabled();
  });

  test('Unsuccessful Login - incorrect password', async ({ loginPage, homePage, navPage, page }) => {
    await homePage.visit();
    expect(await page.title()).toBe('Hudl: We Help Teams and Athletes Win');

    await navPage.clickLoginBtn();
    expect(await page.title()).toBe('Log In - Hudl');

    await loginPage.enterUsername(data.email);
    await loginPage.enterPassword('test1234');
    await loginPage.clickLoginBtn();

    await expect(loginPage.loginErrorMessage).toHaveText("We didn't recognize that email and/or password.Need help?");
    await expect(loginPage.loginBtn).toBeDisabled();
  });
});
