import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import mongoose from 'mongoose';
import { natsWrapper } from '../../nats-wrapper';
import { SnackbarProp } from '../../types/snakbar-type';
import { Result } from '../../models/result';

import {
  validateRequest,
  NotFoundError,
  requireAuth,
  NotAuthorizedError,
  BadRequestError,
} from '@wattickets/common';
import { Question } from '../../models/question';

const router = express.Router();

const SUCCESS_MESSAGE: SnackbarProp = {
  isOpen: true,
  status: 'success',
  message: '正解です。良くできました。',
};

const FAILED_MESSAGE: SnackbarProp = {
  isOpen: true,
  status: 'error',
  message: '不正解です。もう一度確認してみて下さい。',
};

router.put(
  '/api/users/questions/result',
  [
    body('testId')
      .not()
      .isEmpty()
      .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
      .withMessage('テストIDは必須です。'),
    body('answered')
      .not()
      .isEmpty()
      .isInt({ gt: 0, lt: 5 })
      .withMessage('回答は必須です。'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { testId, answered } = req.body;
    const question = await Question.findById(testId);

    if (!question) {
      throw new NotFoundError();
    }

    const resultMessage =
      question.correct === answered ? SUCCESS_MESSAGE : FAILED_MESSAGE;

    if (!req.currentUser) {
      res.send(resultMessage);
    } else {
      const result = await Result.findOne({ userId: req.currentUser!.id });
      for (let i = 0; i < result!.questions.length; i++) {
        if (result!.questions[i].testId === testId) {
          result!.questions[i].answered = true;
        }
      }
      await result?.save();
      res.send(resultMessage);
    }
  }
);

export { router as resultQuestionRouter };
