import { test, expect } from '@playwright/test'

class baseUrl {
  constructor (page) {
    this.page = page
  }

  async NavigateBaseUrl(){
  await page.goto('https://www.demoblaze.com/');
  }
}

module.exports = baseUrl