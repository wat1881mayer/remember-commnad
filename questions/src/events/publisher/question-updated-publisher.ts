import { Publisher, Subjects, QuestionUpdatedEvent } from '@wattickets/common';

export class QuestionUpdatedPublisher extends Publisher<QuestionUpdatedEvent> {
  readonly subject = Subjects.QuestionUpdated;
}
