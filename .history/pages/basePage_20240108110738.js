class baseURLPage {
  constructor(page) {
    this.page = page;
  }

  async BaseUrl(url) {
    await this.page.goto(url);
  }
}

module.exports = {baseURLPage};
