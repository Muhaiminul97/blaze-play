const { test, expect } = require("@playwright/test");
const {basePage} = require("../pages/basePage");

test('verify base url', async ({ page }) => {
    const base = new basePage(page);
   await base.BaseUrl();
});
