import { test, expect } from '@playwright/test';

test.describe('Users API', () => {
  test(
    'TC006 - Get user by ID',
    {
      tag: ['@smoke', '@api'],
    },
    async ({ request }) => {
      const response = await request.get(
        'https://jsonplaceholder.typicode.com/users/1'
      );

      expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(200);

      const body = await response.json();

      expect(body.id).toBe(1);
      expect(body.name).toBeTruthy();
      expect(body.email).toBeTruthy();
    }
  );
});