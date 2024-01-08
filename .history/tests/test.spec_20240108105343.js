const baseURLPage = require("../pages/basePage");
const LogIn = require("../pages/loginPage");
const { test } = require("@playwright/test");

test('verify base url', async ({ page }) => {
  const base = new baseURLPage(page);
  await base.BaseUrl('https://www.demoblaze.com/');
});

test('verify login page', async ({ page }) => {
    const toBeLoggedIn = new LogIn(page);
    await toBeLoggedIn.verifyLogInBTN();
    await toBeLoggedIn.verifyLogIn('m@mail.com','123456')
});
