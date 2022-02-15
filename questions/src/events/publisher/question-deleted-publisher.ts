import { Publisher, Subjects, QuestionDeletedEvent } from '@wattickets/common';

export class QuestionDeletedPublisher extends Publisher<QuestionDeletedEvent> {
  readonly subject = Subjects.QuestionDeleted;
}
