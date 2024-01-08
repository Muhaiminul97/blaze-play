const baseURLPage = require("../pages/basePage");
const logIn = require("../pages/loginPage");
const { test } = require("@playwright/test");

test('verify base url', async ({ page }) => {
  const base = new baseURLPage(page);
  await base.BaseUrl();
});

test('verify login page', async ({ page }) => {
    const toBeLoggedIn = new logIn(page);
    await toBeLoggedIn.verifyLogIn('m@mail.com','123456')
});
