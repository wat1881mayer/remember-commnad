import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface QuestionAttrs {
  id: string;
  category: string;
  statement: string;
  selection: string[];
  correct: number;
}

export interface QuestionDoc extends mongoose.Document {
  category: string;
  statement: string;
  selection: [string];
  version: number;
  correct: number;
  answered?: number;
}

interface QuestionModel extends mongoose.Model<QuestionDoc> {
  build(attrs: QuestionAttrs): QuestionDoc;
  findByEvent(event: {
    id: string;
    version: number;
  }): Promise<QuestionDoc | null>;
}

const QuestionSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    statement: {
      type: String,
      required: true,
    },
    selection: {
      type: [String],
      required: true,
    },
    correct: {
      type: Number,
      required: true,
    },
    answered: {
      type: Number,
      required: false,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

QuestionSchema.statics.build = (attrs: QuestionAttrs) => {
  return new Question({
    _id: attrs.id,
    category: attrs.category,
    statement: attrs.statement,
    selection: attrs.selection,
    correct: attrs.correct,
  });
};

QuestionSchema.statics.findByEvent = (event: {
  id: string;
  version: number;
}) => {
  return Question.findOne({
    _id: event.id,
    version: event.version - 1,
  });
};
QuestionSchema.set('versionKey', 'version');
QuestionSchema.plugin(updateIfCurrentPlugin);

const Question = mongoose.model<QuestionDoc, QuestionModel>(
  'Question',
  QuestionSchema
);

export { Question };
