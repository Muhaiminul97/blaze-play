const baseURLPage = require("./basePage");

class logIn extends baseURLPage(){
constructor(page){
    super(page);
    this.usernameInput = '#loginusername';
    this.passInput = '#loginpassword';
}

async verifyLogIn(username,password){
    await this.page.fill(this.usernameInput,username);
    await this.page.fill(this.passInput,password);
}

}

module.exports = logIn;