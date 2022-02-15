import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';
import { StringMappingType } from 'typescript';

interface QuestionAttrs {
  userId: string;
  category: string;
  statement: string;
  selection: string[];
  correct: number;
}

export interface QuestionDoc extends mongoose.Document {
  userId: string;
  category: string;
  statement: string;
  selection: [string];
  version: number;
  correct: number;
}

interface QuestionModel extends mongoose.Model<QuestionDoc> {
  build(attrs: QuestionAttrs): QuestionDoc;
}

const QuestionSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
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
  return new Question(attrs);
};

QuestionSchema.set('versionKey', 'version');
QuestionSchema.plugin(updateIfCurrentPlugin);

const Question = mongoose.model<QuestionDoc, QuestionModel>(
  'Question',
  QuestionSchema
);

export { Question };
