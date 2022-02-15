import { Publisher, Subjects, QuestionCreatedEvent } from '@wattickets/common';

export class QuestionCreatedPublisher extends Publisher<QuestionCreatedEvent> {
  readonly subject = Subjects.QuestionCreated;
}
