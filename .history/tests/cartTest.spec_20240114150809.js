import { test, expect } from '@playwright/test'
import { LogIn } from '../pages/loginPage'
const { baseURLPage } = require('../pages/basePage')
const { addtoCart } = require('../pages/addtoCart')
const userLoginTests = require('./userLogIn.spec')

test.describe('Cart Page', () => {
  let loginPage;
  let page;
  test.beforeEach(async () => {
    page = await browser.newPage();
    loginPage = new loginPage(page);

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
