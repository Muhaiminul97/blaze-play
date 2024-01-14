import {test,expect} from '@playwright/test'
import {LogIn} from "../pages/loginPage";
const {baseURLPage} = require('../pages/basePage')
const {addtoCart} = require('../pages/addtoCart')

test.describe.serial('Cart Page', () => {
    let page;
  
    // This ensures that loginpage.spec.ts is executed first
    test.beforeEach(async ({}, run) => {
      await run('loginpage.spec.ts');
    });
    test.beforeEach(async ({ browser }) => {
        // Open a new browser context and page before each test
        page = await browser.newPage();
      });
test('verify product selection', async ({page})=>{
   new baseURLPage(page);
    const cart = new addtoCart(page);
    await cart.BaseUrl('https://www.demoblaze.com/');
    await cart.chooseProduct();

})})