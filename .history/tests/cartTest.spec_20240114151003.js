import { test, expect } from '@playwright/test'
import { LogIn } from '../pages/loginPage'
const { baseURLPage } = require('../pages/basePage')
const { addtoCart } = require('../pages/addtoCart')
const userLoginTests = require('./userLogIn.spec')

test.describe('Cart Page', () => {
  let loginPage;
  let homePage;
  let page;
  test.beforeEach(async () => {
    page = await browser.newPage();
    loginPage = new LogIn(page);
    homePage = new baseURLPage(page);
    await loginPage.verifyLogIn('')
    await toBeLoggedIn.BaseUrl('https://www.demoblaze.com/');
    await toBeLoggedIn.verifyLogInBTN();
    await toBeLoggedIn.verifyLogIn('m@mail.com', 'admin');
    await toBeLoggedIn.verifyLogInBtnClick();
    await toBeLoggedIn.isLoggedInSuccess('Welcome m@mail.com');

  })

  test('verify product selection', async () => {
    new baseURLPage(page)
    const cart = new addtoCart(page)
    await cart.BaseUrl('https://www.demoblaze.com/')
    await cart.chooseProduct()
  })

  test.afterEach(async () => {
    await page.close()
  })
})
