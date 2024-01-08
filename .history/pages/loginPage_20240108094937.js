const baseURLPage = require("./basePage");

class LogIn extends baseURLPage {
  constructor(page) {
    super(page);
    this.loginBtn = '#login2';
    this.usernameInput = '#loginusername';
    this.passInput = '#loginpassword';
  }

  async verifyLogIn(username, password) {
    await this.page.click(this.loginBtn);
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passInput, password);
  }
}

module.exports = LogIn;
