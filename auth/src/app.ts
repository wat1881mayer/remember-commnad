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
import { resetTokenCreatedRouter } from './route/reset/reset-token-created';
import { resetPasswordRouter } from './route/reset/reset-password';

const app = express();
app.set('trust proxy', true);
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use(currentUser);
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(resultQuestionRouter);
app.use(indexUserRouter);
app.use(resetTokenCreatedRouter);
app.use(resetPasswordRouter);

app.use(errorHandler);

export { app };
