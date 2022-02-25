import express, { application } from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './route/current-user';
import { signinRouter } from './route/signin';
import { signoutRouter } from './route/signout';
import { signupRouter } from './route/signup';
import { errorHandler, NotFoundError, currentUser } from '@wattickets/common';
import { resultQuestionRouter } from './route/questions/result';
import { indexUserRouter } from './route';

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
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(resultQuestionRouter);
app.use(indexUserRouter);

app.use(errorHandler);

export { app };
