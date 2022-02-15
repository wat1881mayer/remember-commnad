import { Question } from '../question';
import mongoose from 'mongoose';

it('implements optimistic concurrency control', async () => {
  //create an instance of a ticket
  const question = Question.build({
    userId: '123',
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
  await question.save();
  //fetch the ticket twice
  const firstInstance = await Question.findById(question.id);
  const secondeInstance = await Question.findById(question.id);
  //make two separate changes to the tickets we fetched
  firstInstance!.set({ correct: 1 });
  secondeInstance!.set({ correct: 2 });

  //save the first fetched ticket
  await firstInstance!.save();

  //save the second fetched ticket and expect error
  //becouse secondeInstance ticket version is 1
  //but when firstInstance is saved, ticket version is increased 2!
  try {
    await secondeInstance!.save();
  } catch (err) {
    return;
  }
  throw new Error('Should not reach this point');

  //save the second fetched ticket and expect an error
});

it('increments the version number an multiple saves', async () => {
  const question = Question.build({
    userId: '123',
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
  await question.save();
  expect(question.version).toEqual(0);

  await question.save();
  expect(question.version).toEqual(1);
  await question.save();
  expect(question.version).toEqual(2);
});
