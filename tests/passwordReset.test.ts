import test, { expect } from '../fixtures/basePages';

test('Reset Password - User can request to reset their password: @login', async ({
  loginPage,
  homePage,
  navPage,
  passwordResetPage,
  passwordResetConfirmation,
  page
}) => {
  await homePage.visit();
  expect(await page.title()).toBe('Hudl: We Help Teams and Athletes Win');

  await navPage.clickLoginBtn();
  expect(await page.title()).toBe('Log In - Hudl');

  await loginPage.clickNeedHelpLink();
  expect(await page.title()).toBe('Log In');
  expect(page.url()).toContain('login/help#');

  await expect(passwordResetPage.passwordResetButton).toBeDisabled();
  await passwordResetPage.enterEmail('costag1982@gmail.com');
  await passwordResetPage.clickPasswordResetButton();

  await expect(passwordResetConfirmation.confirmationHeader).toHaveText('Check Your Email');
  expect(page.url()).toContain('login/check-email');
});

test('Reset Password - Password is invalid: @login', async ({
  loginPage,
  homePage,
  navPage,
  passwordResetPage,
  page
}) => {
  await homePage.visit();
  expect(await page.title()).toBe('Hudl: We Help Teams and Athletes Win');

  await navPage.clickLoginBtn();
  expect(await page.title()).toBe('Log In - Hudl');

  await loginPage.clickNeedHelpLink();
  expect(await page.title()).toBe('Log In');
  expect(page.url()).toContain('login/help#');
  await expect(passwordResetPage.passwordResetButton).toBeDisabled();

  await passwordResetPage.enterEmail('costag1982');
  await passwordResetPage.clickPasswordResetButton();
  await expect(passwordResetPage.passwordResetError).toHaveText(
    "That isn't a valid email address. Make sure to use the email@domain.com format."
  );
});

test('Reset Password - Password does not exist: @login', async ({
  loginPage,
  homePage,
  navPage,
  passwordResetPage,
  page
}) => {
  await homePage.visit();
  expect(await page.title()).toBe('Hudl: We Help Teams and Athletes Win');

  await navPage.clickLoginBtn();
  expect(await page.title()).toBe('Log In - Hudl');

  await loginPage.clickNeedHelpLink();
  expect(await page.title()).toBe('Log In');
  expect(page.url()).toContain('login/help#');
  await expect(passwordResetPage.passwordResetButton).toBeDisabled();

  await passwordResetPage.enterEmail('costag1983@gmail.coms');
  await passwordResetPage.clickPasswordResetButton();
  await expect(passwordResetPage.passwordResetError).toHaveText(
    "That email address doesn't exist in Hudl. Check with your coach to ensure they have the right email address for you."
  );
});
