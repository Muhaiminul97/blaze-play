import { test, expect } from '@playwright/test'

class base {
  constructor (page) {
    this.page = page
  }

  async NavigateBaseUrl(){
  await page.goto('https://www.demoblaze.com/');
  }
}

