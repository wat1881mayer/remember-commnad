import request from 'supertest';
import { app } from '../../app';
import { Question } from '../../models/question';
import { natsWrapper } from '../../nats-wrapper';

it('has a route handler listening to /api/question for post requests', async () => {
  const response = await request(app).post('/api/questions').send({});

  expect(response.status).not.toEqual(404);
});

it('can only be acessed if the user is signed in', async () => {
  const response = await request(app)
    .post('/api/questions')
    .send({})
    .expect(401);
});

it('returns a status other than 401 if the user is signed in', async () => {
  const response = await request(app)
    .post('/api/questions')
    .set('Cookie', global.signin())
    .send({});
  console.log(response.status);
  expect(response.status).not.toEqual(401);
});

it('returns an error if an invalid category is provided', async () => {
  await request(app)
    .post('/api/questions')
    .set('Cookie', global.signin())
    .send({
      category: '',
      statement: 'dockerfileからイメージを作成するコマンド',
      select1: 'docker run myimage',
      select2: 'docker push myimage',
      select3: 'docker build -t myimage .',
      select4: 'docker add myimage',
      correct: 4,
    })
    .expect(400);
});

it('returns an error if an invalid correct is provided', async () => {
  await request(app)
    .post('/api/questions')
    .set('Cookie', global.signin())
    .send({
      category: 'docker',
      statement: 'dockerfileからイメージを作成するコマンド',
      select1: 'docker run myimage',
      select2: 'docker push myimage',
      select3: 'docker build -t myimage .',
      select4: 'docker add myimage',
      correct: 5,
    })
    .expect(400);
});

it('creates a question with valid inputs', async () => {
  //add in a check to make sure a ticket was saved
  let question = await Question.find({});
  expect(question.length).toEqual(0);

  const category = 'docker';
  await request(app)
    .post('/api/questions')
    .set('Cookie', global.signin())
    .send({
      category,
      statement: 'dockerfileからイメージを作成するコマンド',
      select1: 'docker run myimage',
      select2: 'docker push myimage',
      select3: 'docker build -t myimage .',
      select4: 'docker add myimage',
      correct: 2,
    })
    .expect(201);

  question = await Question.find({});
  expect(question.length).toEqual(1);
  expect(question[0].category).toEqual(category);
  expect(question[0].correct).toEqual(2);
});

it('published an event', async () => {
  await request(app)
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

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
