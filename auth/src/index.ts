import 'express-async-errors';
import mongoose from 'mongoose';
import { QuestionCreatedListener } from './events/listener/question-created-listener';
import { QuestionUpdatedListener } from './events/listener/question-updated-listener';
import { QuestionDeletedListener } from './events/listener/question-deleted-listener';

import { app } from './app';
import { natsWrapper } from './nats-wrapper';

const start = async () => {
  console.log('startup...');
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined!');
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }
  if (!process.env.NATS_CLIENT_ID) {
    throw new Error('NATS_CLEINT_ID must be defined');
  }
  if (!process.env.NATS_CLUSTER_ID) {
    throw new Error('NATS_CLUSTER_ID must be defined');
  }
  if (!process.env.NATS_URL) {
    throw new Error('NATS_URL must be defined');
  }

  try {
    await natsWrapper.connect(
      process.env.NATS_CLUSTER_ID,
      process.env.NATS_CLIENT_ID,
      process.env.NATS_URL
    );
    natsWrapper.client.on('close', () => {
      console.log('NATS connection closed!');
      process.exit();
    });
    process.on('SIGINT', () => natsWrapper.client.close());
    process.on('SIGTERM', () => natsWrapper.client.close());

    new QuestionCreatedListener(natsWrapper.client).listen();
    new QuestionUpdatedListener(natsWrapper.client).listen();
    new QuestionDeletedListener(natsWrapper.client).listen();

    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connection to MongoDB');
  } catch (err) {
    console.error(err);
  }
};

app.listen(3000, () => {
  console.log('Listening on port 3000!!!!!');
});

start();
