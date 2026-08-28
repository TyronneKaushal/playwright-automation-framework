import { test, expect } from '@playwright/test';

test.describe('Inventory', () => {

  test('authenticated user can access inventory', async ({ page }) => {

    await page.goto('/inventory.html');

    await expect(page).toHaveURL(/inventory/);

    await expect(
      page.getByText('Products')
    ).toBeVisible();

  });

});