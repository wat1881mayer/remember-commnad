import request from 'supertest';
import mongoose from 'mongoose';
import { app } from '../../app';
import { Question } from '../../models/question';
import { User } from '../../models/user';
import { Result } from '../../models/result';

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);
});

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'afdfaifl@test.com',
      password: 'p',
    })
    .expect(400);
});

it('disallows duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(400);
});

it('sets a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test1@test.com',
      password: 'password',
    })
    .expect(201);
  expect(response.get('Set-Cookie')).toBeDefined();
});

it('successful signup with question', async () => {
  const question = Question.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    category: 'git',
    correct: 0,
  });
  //save the ticket to the database
  await question.save();
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test1@test.com',
      password: 'password',
    })
    .expect(201);
  expect(response.get('Set-Cookie')).toBeDefined();
  const results = await Result.find({});
  expect(results[0]!.questions[0].testId).toEqual(question.id);
});
