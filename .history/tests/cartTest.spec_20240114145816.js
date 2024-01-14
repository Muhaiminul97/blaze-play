import { test, expect } from '@playwright/test';
import { LogIn } from '../pages/loginPage';
const { baseURLPage } = require('../pages/basePage');
const { addtoCart } = require('../pages/addtoCart');
const userLoginTests = require('./userlogin.spec');

test.describe('Cart Page', () => {
  let page;

  // This ensures that userlogin.spec.js is executed first
  test.beforeEach(async () => {
    // Run the userlogin tests before each test in this suite
    await userLoginTests(); // Corrected function name
    page = await browser.newPage();
  });

  test('verify product selection', async () => {
    new baseURLPage(page);
    const cart = new addtoCart(page);
    await cart.BaseUrl('https://www.demoblaze.com/');
    await cart.chooseProduct();
  });

  test.afterEach(async () => {
    await page.close();
  });
});
