import express, { Request, response, Response } from 'express';
import { body } from 'express-validator';
import { PasswordReset } from '../../models/passwordReset';
import { NotExistError, validateRequest } from '@wattickets/common';
import { User } from '../../models/user';

const router = express.Router();

router.get('/api/users/reset/:token', async (req: Request, res: Response) => {
  const token = req.params.token;
  const passwordReset = await PasswordReset.findOne({ token });
  res.send({
    valid: passwordReset ? true : false,
  });
});

router.post(
  '/api/users/reset/:token',
  [body('password').trim().notEmpty().withMessage('You must suppy a password')],
  validateRequest,
  async (req: Request, res: Response) => {
    const token = req.params.token;
    const passwordReset = await PasswordReset.findOne({ token });

    if (!passwordReset) {
      throw new NotExistError();
    }
    let user = await User.findOne({ _id: passwordReset!.user });
    user!.password = req.body.password;
    await user?.save();

    await PasswordReset.deleteOne({ _id: passwordReset!._id });
    res.status(200).send({});
  }
);

export { router as resetPasswordRouter };
