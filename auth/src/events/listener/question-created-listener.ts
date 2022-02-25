import { Message } from 'node-nats-streaming';
import { Subjects, Listener, QuestionCreatedEvent } from '@wattickets/common';
import { Question } from '../../models/question';
import { queueGroupName } from './queue-group-name';
import { Result } from '../../models/result';

export class QuestionCreatedListener extends Listener<QuestionCreatedEvent> {
  readonly subject = Subjects.QuestionCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: QuestionCreatedEvent['data'], msg: Message) {
    const { id, category, correct } = data;
    const question = Question.build({
      id,
      category,
      correct,
    });
    await question.save();

    const results = await Result.find({});
    for (const result of results) {
      result.questions.push({
        testId: question.id,
        category: question.category,
        answered: false,
      });
      await result.save();
    }

    msg.ack();
  }
}
