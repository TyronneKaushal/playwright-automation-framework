import { test, expect } from '@playwright/test';

test.describe('Inventory', () => {

  test(
    'TC004 - Verify inventory page',
    {
      tag: '@smoke',
    },
    async ({ page }) => {

      await page.goto('/inventory.html');

      await expect(
        page.getByText('Products', { exact: true })
      ).toBeVisible();

      await expect(
        page.getByText('Sauce Labs Backpack')
      ).toBeVisible();
    }
  );


  test(
    'TC005 - Add product to cart',
    {
      tag: '@regression',
    },
    async ({ page }) => {

      await page.goto('/inventory.html');

      await page
        .getByRole('button', { name: 'Add to cart' })
        .first()
        .click();

      await page
        .getByTestId('shopping-cart-link')
        .click();

      await expect(
        page.getByText('Sauce Labs Backpack')
      ).toBeVisible();
    }
  );

});