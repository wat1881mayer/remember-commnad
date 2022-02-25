import express, { Request, Response } from 'express';
import { requireAuth } from '@wattickets/common';
import { Result } from '../models/result';

const router = express.Router();

router.get('/api/users', requireAuth, async (req: Request, res: Response) => {
  const result = await Result.findOne({ userId: req.currentUser!.id });
  res.send(result);
});

export { router as indexUserRouter };
