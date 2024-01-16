const { expect } = require('@playwright/test')
const { baseURLPage } = require('./basePage')

class addToCart extends baseURLPage {
  constructor (pages) {
    super(pages)
    this.product = '.card'
    this.cart = '//*[@id="tbodyid"]/div[2]/div/a'
  }
  async chooseProduct () {
    await this.page.pause()

    await this.page.waitForSelector(this.product)
    const productElements = await this.page.$$(this.product)

    console.log(productElements)
    const randomIndex = Math.floor(Math.random() * productElements.length)
    const randomElement = await productElements[randomIndex]

    await randomElement.click({ timeout: 5000 })
    await this.page.pause()
    const url = await this.page.url()
    console.log(url)
  }
}

module.exports = { addToCart }
