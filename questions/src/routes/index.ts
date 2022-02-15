import express, { Request, Response } from 'express';
import { Question } from '../models/question';

const router = express.Router();

router.get('/api/questions', async (req: Request, res: Response) => {
  const questions = await Question.find({});
  res.send(questions);
});

export { router as indexQuestionsRouter };
