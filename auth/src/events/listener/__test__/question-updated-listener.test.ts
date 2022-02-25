import mongoose from 'mongoose';
import { Message } from 'node-nats-streaming';

import { QuestionUpdatedListener } from '../question-updated-listener';
import { QuestionUpdatedEvent } from '@wattickets/common';
import { natsWrapper } from '../../../nats-wrapper';
import { Question } from '../../../models/question';
import { User } from '../../../models/user';
import { Result } from '../../../models/result';

const setup = async () => {
  //Create a listener
  const listener = new QuestionUpdatedListener(natsWrapper.client);
  //create and save a Question
  const question = Question.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    category: 'git',
    correct: 1,
  });
  await question.save();

  //create a fake data object
  const data: QuestionUpdatedEvent['data'] = {
    id: question.id,
    version: question.version + 1,
    userId: new mongoose.Types.ObjectId().toHexString(),
    category: 'docker',
    statement: '変更内容をステージングするコマンド',
    selection: [
      'git add .',
      'git status ',
      'git push origin main',
      'git pull origin main',
    ],
    correct: 1,
  };
  //create a fake msg object
  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  //return all of this stuff
  return { listener, data, msg, question };
};

it('finds, updates,and saves a Question', async () => {
  const { msg, data, question, listener } = await setup();
  await global.signin();

  await listener.onMessage(data, msg);
  const updatedQuestion = await Question.findById(question.id);
  expect(updatedQuestion!.category).toEqual(data.category);
  expect(updatedQuestion!.version).toEqual(data.version);

  const updatedResults = await Result.find({});
  expect(updatedResults[0]!.questions[0].category).toEqual(data.category);
  expect(updatedResults[0]!.questions[0].answered).toEqual(false);
});

it('acks the message', async () => {
  const { msg, data, question, listener } = await setup();

  await listener.onMessage(data, msg);
  expect(msg.ack).toHaveBeenCalled();
});

it('does not call ack if the event has a skipped version number', async () => {
  const { msg, data, listener, question } = await setup();

  data.version = 10;
  try {
    await listener.onMessage(data, msg);
  } catch (err) {}
  expect(msg.ack).not.toHaveBeenCalled();
});
