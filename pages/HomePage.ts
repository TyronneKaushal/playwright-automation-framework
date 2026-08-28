import { expect, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly heading: Locator;

  constructor(page: import('@playwright/test').Page) {
    super(page);

    this.heading = page.getByText('Swag Labs');
  }

  async open() {
    await this.page.goto('/');
  }
}