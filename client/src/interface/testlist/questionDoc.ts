export interface QuestionDoc {
  id: number;
  userId: string;
  category: string;
  statement: string;
  selection: [string];
  version: number;
  correct: number;
}
