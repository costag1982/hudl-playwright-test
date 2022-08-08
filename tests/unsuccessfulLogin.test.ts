import test, { expect } from '../fixtures/basePages';
import * as data from '../data/user.json';
import { faker } from '@faker-js/faker';

test('No details provided: @login', async ({ loginPage, homePage, navPage, page }) => {
  await homePage.visit();
  expect(await page.title()).toBe('Hudl: We Help Teams and Athletes Win');

  await navPage.clickLoginBtn();
  expect(await page.title()).toBe('Log In - Hudl');

  await loginPage.clickLoginBtn();

  await expect(loginPage.loginErrorMessage).toHaveText("We didn't recognize that email and/or password.Need help?");
  await expect(loginPage.loginBtn).toBeDisabled();
});

test('Incorrect password: @login', async ({ loginPage, homePage, navPage, page }) => {
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

test('User sees different message after 7 failed attempts: @login', async ({ loginPage, homePage, navPage, page }) => {
  await homePage.visit();
  expect(await page.title()).toBe('Hudl: We Help Teams and Athletes Win');

  await navPage.clickLoginBtn();
  expect(await page.title()).toBe('Log In - Hudl');

  for (let attempt = 1; attempt <= 7; attempt++) {
    const expectedMessage =
      attempt < 7
        ? "We didn't recognize that email and/or password.Need help?"
        : 'Can’t remember? Don’t stress.Need help?';
    await loginPage.enterUsername(data.email);
    await loginPage.enterPassword(faker.internet.password());
    await loginPage.clickLoginBtn();
    await expect(loginPage.loginErrorMessage).toHaveText(expectedMessage);
    await expect(loginPage.loginBtn).toBeDisabled();
  }
});
