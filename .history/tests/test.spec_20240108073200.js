const basePage = require("../pages/basePage");
const { test, expect } = require("@playwright/test");

test('verify base url', async ({ page }) => {
    const base = new basePage(page);
    await base.BaseUrl();
});
