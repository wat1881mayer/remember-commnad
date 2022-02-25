import mongoose from 'mongoose';

// An interface that describes the properties
// that are requried to create a new User
interface ResultAttrs {
  userId: string;
  questions?: QuestionDoc[];
}

interface QuestionDoc {
  testId: string;
  category: string;
  answered?: boolean;
}

// An interface that describes the properties
// that a User Model has

interface ResultModel extends mongoose.Model<ResultDoc> {
  build(attrs: ResultAttrs): ResultDoc;
}

export interface ResultDoc extends mongoose.Document {
  userId: string;
  questions: QuestionDoc[];
}

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    questions: [
      {
        testId: {
          type: String,
          required: false,
        },
        category: {
          type: String,
          required: false,
        },
        answered: {
          type: Boolean,
          required: false,
        },
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.statics.build = (attrs: ResultAttrs) => {
  return new Result(attrs);
};

//The second argument of the generics of mongoose.model specifies the type of the model that will be the output.
const Result = mongoose.model<ResultDoc, ResultModel>('Result', userSchema);

export { Result };
