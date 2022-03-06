import mongoose from 'mongoose';
import { Password } from '../services/password';
import { UserDoc } from './user';

// An interface that describes the properties
// that are requried to create a new User
interface PasswordResetAttrs {
  user: UserDoc;
  token: string;
}

// An interface that describes the properties
// that a User Model has

interface PasswordResetModel extends mongoose.Model<PasswordResetDoc> {
  build(attrs: PasswordResetAttrs): PasswordResetDoc;
}

export interface PasswordResetDoc extends mongoose.Document {
  user: UserDoc;
  token: string;
}

const userSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    token: {
      type: String,
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
    timestamps: true,
  }
);

userSchema.statics.build = (attrs: PasswordResetAttrs) => {
  return new PasswordReset(attrs);
};
userSchema.index({ updatedAt: 1 }, { expireAfterSeconds: 7200 });
//The second argument of the generics of mongoose.model specifies the type of the model that will be the output.
const PasswordReset = mongoose.model<PasswordResetDoc, PasswordResetModel>(
  'PasswordReset',
  userSchema
);

export { PasswordReset };
