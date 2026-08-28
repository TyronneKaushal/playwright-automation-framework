import { Locator, Page } from '@playwright/test';

export class Header {
  readonly page: Page;
  readonly homeLink: Locator;
  readonly productsLink: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.homeLink = page.getByRole('link', {
      name: 'Home',
    });

    this.productsLink = page.getByRole('link', {
      name: 'Products',
    });

    this.cartLink = page.getByRole('link', {
      name: 'Cart',
    });
  }

  async openProducts() {
    await this.productsLink.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}