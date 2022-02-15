import mongoose from 'mongoose';
import { Question } from '../question';
import { User } from '../user';

it('implements optimistic concurrency control', async () => {
  //create an instance of a ticket
  const firstQuestion = Question.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    category: 'git',
    statement: '変更内容をステージングするコマンドはどれか',
    selection: [
      'git add .',
      'git commit .',
      'git status',
      'git push origin HEAD',
    ],
    correct: 0,
  });
  //save the ticket to the database
  await firstQuestion.save();

  const secondQuestion = Question.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    category: 'docker',
    statement: 'dockerfileからイメージを作成するコマンド',
    selection: [
      'docker build -t myimage .',
      'docker commit myimage',
      'docker push myimage',
      'docker run myimage ',
    ],
    correct: 0,
  });
  //save the ticket to the database
  await secondQuestion.save();

  const questions = await Question.find({});

  const user = User.build({ email: 'test@test.com', password: 'password' });
  await user.save();

  const createdUser = await User.findById(user.id);
  expect(createdUser!.email).toEqual('test@test.com');
  console.log('questions', questions);
  const target = await User.findOneAndUpdate(
    { id: createdUser!.id },
    { questions: questions }
  );

  const doc = await User.findOne({ id: createdUser!.id }).populate('questions');
  console.log(doc);
  expect(doc?.questions.length).toEqual(2);
});
