import { test, expect } from "@playwright/test";
import basePage from "../pages/basePage";

test('verify base url', async ({ page }) => {
    const base = new basePage (page);
   await base.BaseUrl();
});
