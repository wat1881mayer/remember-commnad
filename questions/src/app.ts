import express, { application } from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@wattickets/common';
import { cookie } from 'express-validator';
import { createQuestionRouter } from './routes/new';
import { indexQuestionsRouter } from './routes';
import { showQuestionRouter } from './routes/show';
import { updateQuestionRouter } from './routes/update';
import { deleteQuestionRouter } from './routes/delete';

const app = express();
app.set('trust proxy', true);
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

app.use(currentUser);

app.use(indexQuestionsRouter);
app.use(createQuestionRouter);
app.use(showQuestionRouter);
app.use(updateQuestionRouter);
app.use(deleteQuestionRouter);

app.use(errorHandler);

export { app };
