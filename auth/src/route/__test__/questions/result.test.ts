import request from 'supertest';
import mongoose from 'mongoose';
import { app } from '../../../app';
import { Question } from '../../../models/question';
import { Result } from '../../../models/result';
import { User } from '../../../models/user';

it('returns a 400 with an invalid testId ', async () => {
  await request(app)
    .put('/api/users/questions/result')
    .send({
      testId: 'afdfaifl',
      answered: 2,
    })
    .expect(400);
});

it('returns a 400 with an invalid answered', async () => {
  await request(app)
    .put('/api/users/questions/result')
    .send({
      testId: 'afdfaifl',
      answered: 0,
    })
    .expect(400);
});

it('returns a 404 with not exist testId', async () => {
  const question = Question.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    category: 'git',
    correct: 1,
  });
  await question.save();

  await request(app)
    .put('/api/users/questions/result')
    .send({
      testId: new mongoose.Types.ObjectId().toHexString(),
      answered: 1,
    })
    .expect(404);
});

it('sets a cookie after successful result', async () => {
  const question = Question.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    category: 'git',
    correct: 1,
  });
  await question.save();

  const firstResult = await request(app)
    .put('/api/users/questions/result')
    .send({
      testId: question.id,
      answered: 2,
    });
  expect(firstResult.body.status).toEqual('error');

  const secondResult = await request(app)
    .put('/api/users/questions/result')
    .send({
      testId: question.id,
      answered: 1,
    });
  expect(secondResult.body.status).toEqual('success');
});

it('successful signup with question', async () => {
  //save the question to the database
  const question = Question.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    category: 'git',
    correct: 1,
  });
  await question.save();

  const cookie = await global.signin();

  const response = await request(app)
    .put('/api/users/questions/result')
    .set('Cookie', cookie)
    .send({
      testId: question.id,
      answered: 1,
    })
    .expect(200);
  expect(response.body.status).toEqual('success');

  const results = await Result.find({});
  expect(results[0]!.questions[0].answered).toEqual(true);
});
