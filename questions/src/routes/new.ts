import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@wattickets/common';
import { Question } from '../models/question';
import { natsWrapper } from '../nats-wrapper';
import { QuestionCreatedPublisher } from '../events/publisher/question-created-publisher';

const router = express.Router();

router.post(
  '/api/questions',
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
    const { category, statement, select1, select2, select3, select4, correct } =
      req.body;

    const selection: string[] = [select1, select2, select3, select4];

    const question = Question.build({
      userId: req.currentUser!.id,
      category,
      statement,
      selection: [select1, select2, select3, select4],
      correct,
    });

    await question.save();
    await new QuestionCreatedPublisher(natsWrapper.client).publish({
      id: question.id,
      userId: question.userId,
      category: question.category,
      statement: question.statement,
      selection: question.selection,
      correct: question.correct,
      version: question.version,
    });

    res.status(201).send(question);
  }
);

export { router as createQuestionRouter };
