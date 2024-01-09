const { expect } = require('@playwright/test')
const { baseURLPage } = require('./basePage')

class LogIn extends baseURLPage {
  constructor (page) {
    super(page)
    this.loginBtn = '#login2'
    this.usernameInput = '#loginusername'
    this.passInput = '#loginpassword'
    this.logInSubmit = '//*[@id="logInModal"]/div/div/div[3]/button[2]'
    this.userName = '//*[@id="nameofuser"]'
  }

  async verifyLogInBTN () {
    await this.page.setDefaultTimeout(10000)
    await this.page.dblclick(this.loginBtn)
  }

  async verifyLogIn (username, password) {
    await this.page.pause();
    await this.page.fill(this.usernameInput, username)
    await this.page.fill(this.passInput, password)
  }
  async verifyLogInBtnClick () {
    await this.page.pause(); 
    const loginSubmitButton = await this.page.locator(this.logInSubmit)
    await loginSubmitButton.click()
    await await page.waitForNavigation();
    
  }
  async isLoggedInSuccess (user) {
    await this.page.setDefaultTimeout(90000)
    console.log(await this.page.content())
    const userNameText = await this.page.textContent(this.userName, {
      state: 'visible'
    })
    await this.page.setDefaultTimeout(90000);
    expect(userNameText).toBe(user)
  }
}

module.exports = { LogIn }
