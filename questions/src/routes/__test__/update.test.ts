import mongoose from 'mongoose';
import request from 'supertest';
import { Question } from '../../models/question';
import { app } from '../../app';
import { natsWrapper } from '../../nats-wrapper';

it('returns a 404 if the provided id does not exist', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app)
    .put(`/api/questions/${id}`)
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
    .expect(404);
});

it('returns a 401 if the user is not authenticated', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app)
    .put(`/api/questions/${id}`)
    .send({
      category: 'docker',
      statement: 'dockerfileからイメージを作成するコマンド',
      select1: 'docker run myimage',
      select2: 'docker push myimage',
      select3: 'docker build -t myimage .',
      select4: 'docker add myimage',
      correct: 2,
    })
    .expect(401);
});

it('returns a 401 if the user does not own the question', async () => {
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
    });

  await request(app)
    .put(`/api/questions/${response.body.id}`)
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
    .expect(401);
});

it('returns a 400 if the user provides as invalid category and correct', async () => {
  const cookie = global.signin();
  const response = await request(app)
    .post('/api/questions')
    .set('Cookie', cookie)
    .send({
      category: 'docker',
      statement: 'dockerfileからイメージを作成するコマンド',
      select1: 'docker run myimage',
      select2: 'docker push myimage',
      select3: 'docker build -t myimage .',
      select4: 'docker add myimage',
      correct: 2,
    });

  await request(app)
    .put(`/api/questions/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      category: '',
      statement: 'dockerfileからイメージを作成するコマンド',
      select1: 'docker run myimage',
      select2: 'docker push myimage',
      select3: 'docker build -t myimage .',
      select4: 'docker add myimage',
      correct: 2,
    })
    .expect(400);

  await request(app)
    .put(`/api/questions/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      category: 'docker',
      statement: 'dockerfileからイメージを作成するコマンド',
      select1: 'docker run myimage',
      select2: 'docker push myimage',
      select3: 'docker build -t myimage .',
      select4: 'docker add myimage',
      correct: 0,
    })
    .expect(400);
});

it('updates the question provided valid inputs', async () => {
  const cookie = global.signin();
  const response = await request(app)
    .post('/api/questions')
    .set('Cookie', cookie)
    .send({
      category: 'docker',
      statement: 'dockerfileからイメージを作成するコマンド',
      select1: 'docker run myimage',
      select2: 'docker push myimage',
      select3: 'docker build -t myimage .',
      select4: 'docker add myimage',
      correct: 2,
    });

  await request(app)
    .put(`/api/questions/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      category: 'docker',
      statement: 'dockerfileからイメージを作成するコマンド',
      select1: 'docker run myimage',
      select2: 'docker push myimage',
      select3: 'docker build -t myimage .',
      select4: 'docker add myimage',
      correct: 3,
    })
    .expect(200);

  const questionResponse = await request(app)
    .get(`/api/questions/${response.body.id}`)
    .send();

  expect(questionResponse.body.category).toEqual('docker');
  expect(questionResponse.body.correct).toEqual(3);
});

it('publishes an event', async () => {
  const cookie = global.signin();
  const response = await request(app)
    .post('/api/questions')
    .set('Cookie', cookie)
    .send({
      category: 'docker',
      statement: 'dockerfileからイメージを作成するコマンド',
      select1: 'docker run myimage',
      select2: 'docker push myimage',
      select3: 'docker build -t myimage .',
      select4: 'docker add myimage',
      correct: 2,
    });

  await request(app)
    .put(`/api/questions/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      category: 'docker',
      statement: 'dockerfileからイメージを作成するコマンド',
      select1: 'docker run myimage',
      select2: 'docker push myimage',
      select3: 'docker build -t myimage .',
      select4: 'docker add myimage',
      correct: 3,
    })
    .expect(200);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
