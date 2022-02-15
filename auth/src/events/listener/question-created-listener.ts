import { Message } from 'node-nats-streaming';
import { Subjects, Listener, QuestionCreatedEvent } from '@wattickets/common';
import { Question } from '../../models/question';
import { queueGroupName } from './queue-group-name';

export class QuestionCreatedListener extends Listener<QuestionCreatedEvent> {
  readonly subject = Subjects.QuestionCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: QuestionCreatedEvent['data'], msg: Message) {
    const { id, category, selection, statement, correct } = data;
    const question = Question.build({
      id,
      category,
      statement,
      selection,
      correct,
    });
    await question.save();

    msg.ack();
  }
}
