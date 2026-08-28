import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected readonly page: Page) {}

  async goBack() {
    await this.page.goBack();
  }

  async refresh() {
    await this.page.reload();
  }
}