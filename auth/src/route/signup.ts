import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import { validateRequest, BadRequestError } from '@wattickets/common';
import { User } from '../models/user';
import { Question, QuestionDoc } from '../models/question';
import { Result } from '../models/result';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError('Email in use');
      return res.send({});
    }

    const questions = await Question.find({});
    const usersQuestion = [];

    if (questions) {
      for (const question of questions) {
        usersQuestion.push({
          testId: question.id,
          category: question.category,
          answered: false,
        });
      }
    }

    const user = User.build({ email, password });
    await user.save();

    const result = Result.build({ userId: user.id, questions: usersQuestion });
    await result.save();

    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!
    );
    req.session = { jwt: userJwt };

    res.status(201).send(user);
  }
);

export { router as signupRouter };
