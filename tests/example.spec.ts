import { test, expect } from '@playwright/test';

// 2 Hook: beforeEach/afterEach , beforeAll,afterAll

test.beforeAll(async()=>{
  console.log("Before all is Running")
})

test.afterAll(async()=>{
  console.log("After all is Running")
})


test.beforeEach(async()=>{
  console.log("Before Each is Running")
})

test.afterEach(async()=>{
  console.log("After each is Running")
})


  test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
  
  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro/);
  });


