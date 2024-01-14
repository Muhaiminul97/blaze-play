const { baseURLPage } = require('../pages/basePage');
const { LogIn } = require('../pages/loginPage');
const { test, expect } = require('@playwright/test');

test.describe('User Login Page', () => {
  let page;

  test.beforeEach(async () => {
    page = await browser.newPage();
  });

  test('verify login url', async () => {
    new baseURLPage(page);
    const toBeLoggedIn = new LogIn(page);
    await toBeLoggedIn.BaseUrl('https://www.demoblaze.com/');
    await toBeLoggedIn.verifyLogInBTN();
    await toBeLoggedIn.verifyLogIn('m@mail.com', 'admin');
    await toBeLoggedIn.verifyLogInBtnClick();
    await toBeLoggedIn.isLoggedInSuccess('Welcome m@mail.com');
  });

});

module.exports = userLogIn;
