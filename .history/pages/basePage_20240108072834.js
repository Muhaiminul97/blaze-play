// basePage.js
class basePage {
  constructor(page) {
    this.page = page;
  }

  async BaseUrl() {
    await this.page.goto('https://www.demoblaze.com/');
  }
}

export default basePage;
