const LogIn = require('../pages/loginPage')
const { test } = require('@playwright/test')

test('verify base url', async ({ page }) => {
  
  const toBeLoggedIn = new LogIn(page)
  await toBeLoggedIn.verifyLogInBTN()
  await toBeLoggedIn.verifyLogIn('m@mail.com', '123456')
})
