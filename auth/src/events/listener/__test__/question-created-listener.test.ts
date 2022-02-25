import mongoose from 'mongoose';
import { Message } from 'node-nats-streaming';

import { QuestionCreatedListener } from '../question-created-listener';
import { QuestionCreatedEvent } from '@wattickets/common';
import { natsWrapper } from '../../../nats-wrapper';
import { Question } from '../../../models/question';
import { User } from '../../../models/user';
import { Result } from '../../../models/result';

const setup = async () => {
  //create an instance of the listener
  const listener = new QuestionCreatedListener(natsWrapper.client);
  //create a fake data event
  const data: QuestionCreatedEvent['data'] = {
    id: new mongoose.Types.ObjectId().toHexString(),
    userId: new mongoose.Types.ObjectId().toHexString(),
    version: 0,
    category: 'git',
    statement: '変更内容をステージングするコマンド',
    selection: [
      'git add .',
      'git commit .',
      'git push origin main',
      'git pull origin main',
    ],
    correct: 1,
  };
  //create a fake message object
  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, data, msg };
};

it('creates and saves a ticket', async () => {
  const { listener, data, msg } = await setup();
  //call the onMessage  function with the data object + message object
  await listener.onMessage(data, msg);
  //write assertions to make sure  a tikect was created!
  const question = await Question.findById(data.id);

  expect(question).toBeDefined();
  expect(question!.category).toEqual(data.category);
  expect(question!.correct).toEqual(data.correct);
});

it('acks the message', async () => {
  const { listener, data, msg } = await setup();
  //call the onMessage function with the data object + object

  await listener.onMessage(data, msg);
  //write assertions to make sure ack function called
  expect(msg.ack).toHaveBeenCalled();
});

it('creates and saves a ticket', async () => {
  const { listener, data, msg } = await setup();
  //call the onMessage  function with the data object + message object
  const firstQuestion = Question.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    category: 'git',
    correct: 0,
  });
  await firstQuestion.save();
  //save the ticket to the database
  const cookie = await global.signin();

  await listener.onMessage(data, msg);
  //write assertions to make sure  a tikect was created!
  const results = await Result.find({});
  console.log(results[0].questions);
  expect(results).toBeDefined();
  expect(results[0].questions.length).toEqual(2);
  expect(results[0].questions[1].testId).toEqual(data.id);
});
