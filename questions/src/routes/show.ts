import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Question } from '../models/question';
import { NotFoundError } from '@wattickets/common';

const router = express.Router();

router.get('/api/questions/:id', async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    throw new NotFoundError();
  }
  const question = await Question.findById(req.params.id);

  if (!question) {
    throw new NotFoundError();
  }

  res.send(question);
});

export { router as showQuestionRouter };
