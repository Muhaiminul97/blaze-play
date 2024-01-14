import {test,expect} from '@playwright/test'
import {LogIn} from "../pages/loginPage";
const {baseURLPage} = require('../pages/basePage')
const {addtoCart} = require('../pages/addtoCart')

test('verify product selection', async ({page})=>{
   new baseURLPage(page);
    const cart = new addtoCart(page);
    await cart.BaseUrl('https://www.demoblaze.com/');
    await cart.chooseProduct();

})