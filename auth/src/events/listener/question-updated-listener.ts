import { Message } from 'node-nats-streaming';
import { Subjects, Listener, QuestionUpdatedEvent } from '@wattickets/common';
import { Question } from '../../models/question';
import { queueGroupName } from './queue-group-name';

export class QuestionUpdatedListener extends Listener<QuestionUpdatedEvent> {
  readonly subject = Subjects.QuestionUpdated;
  queueGroupName = queueGroupName;

  async onMessage(data: QuestionUpdatedEvent['data'], msg: Message) {
    const { id, category, selection, statement, correct } = data;

    const question = await Question.findByEvent(data);

    if (!question) {
      throw new Error('Ticket not found');
    }

    if (question.correct === correct) {
      question.set({ category, selection, statement, correct });
    } else {
      const answered = null;
      question.set({ category, selection, statement, correct, answered });
    }
    await question.save();

    msg.ack();
  }
}
