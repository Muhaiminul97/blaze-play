import {test,expect} from '@playwright/test'
import {LogIn} from "../pages/loginPage";
const {baseURLPage} = require('../pages/basePage')
const {addtoCart} = require('../pages/addtoCart')
test.describe.configure({ mode: 'serial' });

test.describe('Cart Page', () => {
    let page;
  
    // This ensures that loginpage.spec.ts is executed first
    test.beforeEach(async ({}) => {
        await test.runWith({ file: 'loginpage.spec.js' });
        page = await browser.newPage();

    });
test('verify product selection', async ({page})=>{
   new baseURLPage(page);
    const cart = new addtoCart(page);
    await cart.BaseUrl('https://www.demoblaze.com/');
    await cart.chooseProduct();

})})