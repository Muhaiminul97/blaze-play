const { expect } = require("@playwright/test");
const {baseURLPage} = require("./basePage");

class LogIn extends baseURLPage {
  constructor(page) {
    super(page);
    this.loginBtn = '#login2';
    this.usernameInput = '#loginusername';
    this.passInput = '#loginpassword';
    this.logInSubmit = 'button:has-text("Log in")';
    this.userName = '#nameofuser';
  }

  async verifyLogInBTN()
  {
    await this.page.setDefaultTimeout(10000);
    await this.page.click(this.loginBtn);

  }

  async verifyLogIn(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passInput, password);
    await this.page.click(this.logInSubmit);
  }
  async isLoggedInSuccess(user)
  {
    const userNameText = await this.page.textContent(this.userName);
    expect(userNameText).toBe(user);
  }
}

module.exports = {LogIn};
