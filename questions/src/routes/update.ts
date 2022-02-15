import express, { Request, Response } from 'express';
import { body } from 'express-validator';

import {
  validateRequest,
  NotFoundError,
  requireAuth,
  NotAuthorizedError,
  BadRequestError,
} from '@wattickets/common';
import { Question } from '../models/question';
import { QuestionUpdatedPublisher } from '../events/publisher/question-updated-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.put(
  '/api/questions/:id',
  requireAuth,
  [
    body('category').not().isEmpty().withMessage('カテゴリー項目は必須です。'),
    body('statement').not().isEmpty().withMessage('問題文は必須です。'),
    body('select1')
      .not()
      .isEmpty()
      .withMessage('選択肢には何らかの内容を入れてください'),
    body('select2')
      .not()
      .isEmpty()
      .withMessage('選択肢には何らかの内容を入れてください'),
    body('select3')
      .not()
      .isEmpty()
      .withMessage('選択肢には何らかの内容を入れてください'),
    body('select4')
      .not()
      .isEmpty()
      .withMessage('選択肢には何らかの内容を入れてください'),
    body('correct')
      .not()
      .isEmpty()
      .isInt({ gt: 0, lt: 5 })
      .withMessage('正解番号は必ず入力してください'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const question = await Question.findById(req.params.id);

    if (!question) {
      throw new NotFoundError();
    }

    if (question.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    const { select1, select2, select3, select4 } = req.body;
    const selection = [select1, select2, select3, select4];

    question.set({
      category: req.body.category,
      statement: req.body.statement,
      selection: selection,
      correct: req.body.correct,
    });

    await question.save();
    new QuestionUpdatedPublisher(natsWrapper.client).publish({
      id: question.id,
      category: question.category,
      statement: question.statement,
      selection: question.selection,
      correct: question.correct,
      userId: question.userId,
      version: question.version,
    });

    res.send(question);
  }
);

export { router as updateQuestionRouter };
