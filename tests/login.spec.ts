import { expect } from '@playwright/test';
import { test } from '../fixtures/test-fixtures';
import { loginData } from '../data/login-data';

for (const data of loginData) {
  test(`${data.id} - ${data.scenario}`, 
    {
      tag: data.expected === 'success' ? '@smoke' : '@regression',
    },
    async ({ loginPage }) => {
    await loginPage.open();

    await loginPage.login(
      data.username,
      data.password
    );

    if (data.expected === 'success') {
      await loginPage.verifySuccessfulLogin();
    } else {
      await loginPage.verifyLoginError();
    }
  });
}