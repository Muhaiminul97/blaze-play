const baseURLPage = require("./basePage");

class LogIn extends baseURLPage {
  constructor(page) {
    super(page);
    this.loginBtn = '#login2';
    this.usernameInput = '#loginusername';
    this.passInput = '#loginpassword';
  }

  async verifyLogInBTN()
  {
    const loginButton = this.loginBtn;
    await this.page.setDefaultTimeout(10000)
    await loginButton.waitFor({ state: 'visible' });
    await this.page.click(this.loginBtn);

  }

  async verifyLogIn(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passInput, password);
  }
}

module.exports = LogIn;
