const { test, expect } = require("@playwright/test");
const {basePage} = require("../pages/basePage").default;

test('verify base url', async ({ page }) => {
    const BaseUrl = new basePage(page);
    await BaseUrl.
});