import { test, expect } from '@playwright/test'

class basePage {
  constructor (page) {
    this.page = page
  }
  async BaseUrl() {
    await this.page.goto('https://www.demoblaze.com/');
    
  }
}

module.exports = basePage;