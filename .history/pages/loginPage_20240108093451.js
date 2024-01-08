const baseURLPage = require("./basePage");

class logIn extends baseURLPage(){
constructor(page){
    super(page);
    this.usernameInput = '#loginusername';
    this.passInput = '#loginpassword';
}

}