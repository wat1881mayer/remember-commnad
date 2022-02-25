import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface QuestionAttrs {
  id: string;
  category: string;
  correct: number;
}

export interface QuestionDoc extends mongoose.Document {
  category: string;
  version: number;
  correct: number;
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
    correct: {
      type: Number,
      required: true,
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
