import { Message } from 'node-nats-streaming';
import { Subjects, Listener, QuestionDeletedEvent } from '@wattickets/common';
import { Question } from '../../models/question';
import { queueGroupName } from './queue-group-name';
import { Result } from '../../models/result';

export class QuestionDeletedListener extends Listener<QuestionDeletedEvent> {
  readonly subject = Subjects.QuestionDeleted;
  queueGroupName = queueGroupName;

  async onMessage(data: QuestionDeletedEvent['data'], msg: Message) {
    const { id } = data;

    const results = await Result.find({});
    for (const result of results) {
      for (const [index, targetQuestion] of result.questions.entries()) {
        if (targetQuestion.testId === id) {
          result.questions.splice(index, 1);
          await result.save();
        }
      }
    }

    const question = await Question.findById(id);

    if (!question) {
      throw new Error('Ticket not found');
    }

    const result = await Question.findByIdAndDelete(
      id,
      function (err: Error, res: any) {
        if (err) {
          console.log(err);
        }
      }
    ).clone();

    msg.ack();
  }
}
