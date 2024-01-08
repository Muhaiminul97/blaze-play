const { test, expect } = require("@playwright/test");
const baseUrl = require ('../pages/base')

test('verify base url', async ({ page }) => {
    const base = new base (page);
   await base. 
});
