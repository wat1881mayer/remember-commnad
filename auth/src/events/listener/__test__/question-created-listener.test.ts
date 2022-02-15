import mongoose from 'mongoose';
import { Message } from 'node-nats-streaming';

import { QuestionCreatedListener } from '../question-created-listener';
import { QuestionCreatedEvent } from '@wattickets/common';
import { natsWrapper } from '../../../nats-wrapper';
import { Question } from '../../../models/question';

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
  expect(question!.statement).toEqual(data.statement);
});

it('acks the message', async () => {
  const { listener, data, msg } = await setup();
  //call the onMessage function with the data object + object
  await listener.onMessage(data, msg);
  //write assertions to make sure ack function called
  expect(msg.ack).toHaveBeenCalled();
});
