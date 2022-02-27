import express, { Request, Response } from 'express';
import {
  NotAuthorizedError,
  NotFoundError,
  requireAuth,
  NotAccessError,
} from '@wattickets/common';
import { natsWrapper } from '../nats-wrapper';
import { Question, QuestionDoc } from '../models/question';
import { QuestionDeletedPublisher } from '../events/publisher/question-deleted-publisher';

const router = express.Router();

router.delete(
  '/api/questions/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const question = await Question.findById(req.params.id);

    if (!question) {
      throw new NotFoundError();
    }

    if (question.userId !== req.currentUser!.id) {
      throw new NotAccessError();
    }

    const result = await Question.findByIdAndDelete(
      req.params.id,
      function (err: Error, res: any) {
        if (err) {
          console.log(err);
        }
      }
    ).clone();

    new QuestionDeletedPublisher(natsWrapper.client).publish({
      id: req.params.id,
    });
    res.status(200).send(result);
  }
);

export { router as deleteQuestionRouter };
