import { APIRequestContext, expect } from '@playwright/test';

export class UserApi {
  constructor(private readonly request: APIRequestContext) {}

  async getUser(userId: number) {
    const response = await this.request.get(`/api/users/${userId}`);

    expect(response.ok()).toBeTruthy();

    return response;
  }

  async createUser(userData: object) {
    const response = await this.request.post('/api/users', {
      data: userData,
    });

    expect(response.status()).toBe(201);

    return response;
  }
}