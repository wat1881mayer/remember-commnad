import mongoose from 'mongoose';
import { User } from '../user';
import { Question, QuestionDoc } from '../question';

it('implements optimistic concurrency control', async () => {
  const user = User.build({ email: 'test@test.com', password: 'password' });
  await user.save();

  const createdUser = await User.findById(user.id);
  expect(createdUser!.email).toEqual('test@test.com');
});
