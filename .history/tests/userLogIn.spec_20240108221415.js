const {baseURLPage} = require('../pages/basePage')
const {LogIn} = require('../pages/loginPage')
const { test } = require('@playwright/test')

test('verify base url', async ({ page }) => {
  const base = new baseURLPage(page)
  const toBeLoggedIn = new LogIn(page)
  await toBeLoggedIn.BaseUrl('https://www.demoblaze.com/');
  await toBeLoggedIn.verifyLogInBTN();
  await toBeLoggedIn.verifyLogIn('m@mail.com', '123456');
  await toBeLoggedIn.verifyLogInBtnClick();
  await toBeLoggedIn.isLoggedInSuccess();
})
