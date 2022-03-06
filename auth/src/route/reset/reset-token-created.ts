import express, { Request, response, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest, NotExistError } from '@wattickets/common';
import { User } from '../../models/user';
import { PasswordReset } from '../../models/passwordReset';
import { v4 } from 'uuid';
import sgMail from '@sendgrid/mail';
import { domain } from '../../config/keys';

const router = express.Router();

router.post(
  '/api/users/password/',
  [body('email').isEmail().withMessage('Email must be valid')],
  validateRequest,
  async (req: Request, res: Response) => {
    if (!process.env.SENDGRID_KEY) {
      throw new Error('SEND_GRID KEY must be defined');
    }

    if (!process.env.ADDRESS_KEY) {
      throw new Error('ADDRESS_KEY must be defined');
    }

    const email = req.body.email;

    const user = await User.findOne({ email: email });

    if (!user) {
      throw new NotExistError();
    }

    const token = v4().toString().replace(/-/g, '');

    await PasswordReset.updateOne(
      {
        user: user.id,
      },
      {
        user: user.id,
        token: token,
      },
      {
        upsert: true,
      }
    );

    sgMail.setApiKey(process.env.SENDGRID_KEY);
    const msg = {
      to: email, // Change to your recipient
      from: process.env.ADDRESS_KEY, // Change to your verified sender
      subject: 'パスワード再設定用URLをご連絡します。',
      text: 'パスワード再設定用のURLをご連絡します。有効期限は2時間以内となります。',
      html: `<strong>パスワード再設定用のURLをご連絡します。有効期限は2時間以内となります。<a href=${domain.host}/auth/reset/${token}>パスワード再設定用URL</a>}</strong>`,
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
      })
      .catch((error) => {
        console.error(error);
      });

    res.status(200).send({});
  }
);

export { router as resetTokenCreatedRouter };
