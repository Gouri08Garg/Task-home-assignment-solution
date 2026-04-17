const request = require('supertest');
const app = require('../app');

describe('PATCH /tasks/:id/assign', () => {
  it('should assign a user to a task', async () => {
    // Create a task first, then assign it
    const res = await request(app)
      .patch('/tasks/some-valid-id/assign')
      .send({ assignee: 'Gemini' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.assignee).toBe('Gemini');
  });

  it('should return 400 for empty assignee', async () => {
    const res = await request(app)
      .patch('/tasks/some-valid-id/assign')
      .send({ assignee: '' });
    expect(res.statusCode).toEqual(400);
  });
});