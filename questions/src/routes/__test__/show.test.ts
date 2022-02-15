import request from 'supertest';
import mongoose from 'mongoose';
import { app } from '../../app';
import { Question } from '../../models/question';

it('returns a 404 if the question is not found', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app).get(`/api/questions/${id}`).send().expect(404);
});

it('returns the question if the question is found', async () => {
  const response = await request(app)
    .post('/api/questions')
    .set('Cookie', global.signin())
    .send({
      category: 'docker',
      statement: 'dockerfileからイメージを作成するコマンド',
      select1: 'docker run myimage',
      select2: 'docker push myimage',
      select3: 'docker build -t myimage .',
      select4: 'docker add myimage',
      correct: 2,
    })
    .expect(201);

  const questionResponse = await request(app)
    .get(`/api/questions/${response.body.id}`)
    .send()
    .expect(200);

  expect(questionResponse.body.category).toEqual('docker');
  expect(questionResponse.body.correct).toEqual(2);
});
