const request = require('supertest');
const app = require('../index');

describe('Node Hello Service API', () => {

  test('GET /hello should return greeting message', async () => {
    const response = await request(app).get('/hello');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Hello from Node.js service 👋');
  });

  test('GET /health should return UP status', async () => {
    const response = await request(app).get('/health');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'UP' });
  });

});
