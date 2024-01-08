const { test, expect } = require("@playwright/test");
const base = require ('../pages/base')

test('verify base url', async ({ page }) => {
    const base = new base (page);
    
});
