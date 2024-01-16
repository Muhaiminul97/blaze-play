import {test, expect} from '@playwright/test'
import {LogIn} from '../pages/loginPage'

const {baseURLPage} = require('../pages/basePage')
const {addToCart} = require('../pages/addtoCart')

test.describe.serial('Cart Page', () => {
    let loginPage
    let page
    let cart
    test.beforeEach(async ({browser}) => {
        page = await browser.newPage()
        loginPage = new LogIn(page)
        await loginPage.BaseUrl('https://www.demoblaze.com/')
        await loginPage.verifyLogInBTN()
        await loginPage.verifyLogIn('m@mail.com', 'admin')
        await loginPage.verifyLogInBtnClick()

    })

    test('verify product selection', async () => {
        cart = new addToCart(page)
        // await cart.BaseUrl('https://www.demoblaze.com/')
        await cart.chooseProduct()
    })

    test.afterEach(async () => {
        await page.close()
    })
})
