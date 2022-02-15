import mongoose from 'mongoose';
import { Message } from 'node-nats-streaming';

import { QuestionDeletedListener } from '../question-deleted-listener';
import { QuestionDeletedEvent } from '@wattickets/common';
import { natsWrapper } from '../../../nats-wrapper';
import { Question } from '../../../models/question';

const setup = async () => {
  //Create a listener
  const listener = new QuestionDeletedListener(natsWrapper.client);
  //create and save a Question
  const question = Question.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    category: 'git',
    statement: '変更内容をステージングするコマンド',
    selection: [
      'git add .',
      'git commit .',
      'git push origin main',
      'git pull origin main',
    ],
    correct: 1,
  });
  await question.save();
  //create a fake data object
  const data: QuestionDeletedEvent['data'] = {
    id: question.id,
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

  await listener.onMessage(data, msg);
  const updatedQuestion = await Question.findById(question.id);
  expect(updatedQuestion).toBeNull();
});

it('acks the message', async () => {
  const { msg, data, question, listener } = await setup();

  await listener.onMessage(data, msg);
  expect(msg.ack).toHaveBeenCalled();
});
