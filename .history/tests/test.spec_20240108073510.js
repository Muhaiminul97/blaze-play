const BasePage = require("../pages/basePage");
const { test } = require("@playwright/test");

test('verify base url', async ({ page }) => {
  const base = new BasePage(page);
  await base.BaseUrl();
});