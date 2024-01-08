class BasePage {
  constructor(page) {
    this.page = page;
  }

  async BaseUrl() {
    await this.page.goto('https://www.demoblaze.com/');
  }
}

module.exports = BasePage;
