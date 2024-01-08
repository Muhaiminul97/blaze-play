import { test, expect } from "@playwright/test";
import baseUrl from "../pages/base";

test('verify base url', async ({ page }) => {
    const base = new baseUrl (page);
   await baseUrl.NavigateBaseUrl();
});
