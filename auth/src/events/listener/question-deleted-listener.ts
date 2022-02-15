import { Message } from 'node-nats-streaming';
import { Subjects, Listener, QuestionDeletedEvent } from '@wattickets/common';
import { Question } from '../../models/question';
import { queueGroupName } from './queue-group-name';

export class QuestionDeletedListener extends Listener<QuestionDeletedEvent> {
  readonly subject = Subjects.QuestionDeleted;
  queueGroupName = queueGroupName;

  async onMessage(data: QuestionDeletedEvent['data'], msg: Message) {
    const { id } = data;

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
