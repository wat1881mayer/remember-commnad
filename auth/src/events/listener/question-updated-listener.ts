import { Message } from 'node-nats-streaming';
import { Subjects, Listener, QuestionUpdatedEvent } from '@wattickets/common';
import { Question } from '../../models/question';
import { Result } from '../../models/result';
import { queueGroupName } from './queue-group-name';

export class QuestionUpdatedListener extends Listener<QuestionUpdatedEvent> {
  readonly subject = Subjects.QuestionUpdated;
  queueGroupName = queueGroupName;

  async onMessage(data: QuestionUpdatedEvent['data'], msg: Message) {
    const { id, category, correct } = data;

    const question = await Question.findByEvent(data);

    if (!question) {
      throw new Error('Ticket not found');
    }
    question.set({ category, correct });
    await question.save();

    const results = await Result.find({});
    for (let result of results) {
      for (let i = 0; i < result.questions.length; i++) {
        if (result!.questions[i].testId === question.id) {
          result.questions[i].category = category;
          result.questions[i].answered = false;
        }
      }
      result.save();
    }

    msg.ack();
  }
}
