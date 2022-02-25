import request from 'supertest';
import { app } from '../../app';

it('fails when login', async () => {
  await request(app).get('/api/users').send({}).expect(401);
});

it('get request success case', async () => {
  const cookie = await global.signin();
  await request(app)
    .get('/api/users')
    .set('Cookie', cookie)
    .send({})
    .expect(200);
});
