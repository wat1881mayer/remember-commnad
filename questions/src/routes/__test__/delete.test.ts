import request from 'supertest';
import mongoose from 'mongoose';
import { app } from '../../app';
import { Question } from '../../models/question';
import { natsWrapper } from '../../nats-wrapper';

it('has a route handler listening to /api/question for post requests', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  const response = await request(app).delete(`/api/questions/${id}`).send({});

  expect(response.status).not.toEqual(404);
});

it('can only be acessed if the user is signed in', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  const response = await request(app)
    .delete(`/api/questions/${id}`)
    .send({})
    .expect(401);
});

it('returns a status other than 401 if the user is signed in', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  const response = await request(app)
    .delete(`/api/questions/${id}`)
    .set('Cookie', global.signin())
    .send({});
  expect(response.status).not.toEqual(401);
});

it('returns an error if different users question selected', async () => {
  const question = await request(app)
    .post('/api/questions')
    .set('Cookie', global.signin())
    .send({
      category: 'git',
      statement: 'dockerfileからイメージを作成するコマンド',
      select1: 'docker run myimage',
      select2: 'docker push myimage',
      select3: 'docker build -t myimage .',
      select4: 'docker add myimage',
      correct: 2,
    });

  await request(app)
    .delete(`/api/questions/${question.body.id}`)
    .set('Cookie', global.signin())
    .send({})
    .expect(401);
});

it('delete a question with valid inputs', async () => {
  //add in a check to make sure a ticket was saved
  const cookie = global.signin();
  const question = await request(app)
    .post('/api/questions')
    .set('Cookie', cookie)
    .send({
      category: 'git',
      statement: 'dockerfileからイメージを作成するコマンド',
      select1: 'docker run myimage',
      select2: 'docker push myimage',
      select3: 'docker build -t myimage .',
      select4: 'docker add myimage',
      correct: 2,
    });

  await request(app)
    .delete(`/api/questions/${question.body.id}`)
    .set('Cookie', cookie)
    .send({})
    .expect(200);
});

it('published an event', async () => {
  const cookie = global.signin();
  const question = await request(app)
    .post('/api/questions')
    .set('Cookie', cookie)
    .send({
      category: 'git',
      statement: 'dockerfileからイメージを作成するコマンド',
      select1: 'docker run myimage',
      select2: 'docker push myimage',
      select3: 'docker build -t myimage .',
      select4: 'docker add myimage',
      correct: 2,
    });

  await request(app)
    .delete(`/api/questions/${question.body.id}`)
    .set('Cookie', cookie)
    .send({})
    .expect(200);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
