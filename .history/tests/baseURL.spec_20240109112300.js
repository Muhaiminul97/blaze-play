const {baseURLPage} = require('../pages/basePage')
const {LogIn} = require('../pages/loginPage')
const { test } = require('@playwright/test')

test('verify base url', async ({ page }) => {
  const base = new baseURLPage(page)
  await base.BaseUrl('https://www.demoblaze.com/') 
})
