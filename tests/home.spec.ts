import { expect } from '@playwright/test';
import { test } from '../fixtures/test-fixtures';

test.describe('Home Page', () => {
  test('should display the heading', async ({ homePage }) => {
    await homePage.open();

    await expect(homePage.heading).toBeVisible();
  });
});