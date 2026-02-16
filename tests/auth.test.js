const request = require('supertest');
const app = require('../server');

describe('Auth Routes', () => {
  test('POST /api/auth/register - should register a new user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123'
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('token');
    expect(response.body).toHaveProperty('user');
  });

  test('POST /api/auth/login - should login user', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'password123'
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});
