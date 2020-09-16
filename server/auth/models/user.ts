import mongoose from 'mongoose'
import { Password } from '../services/password'

interface UserAttrs {
  name: string;
  surname: string;
  email: string;
  password: string;
  country: string,
  phone: string,
  postalCode: string
}


interface UserDoc extends mongoose.Document {
  name: string;
  surname: string;
  email: string;
  password: string;
  country: string,
  phone: string,
  postalCode: string
}


interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc
}


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    postalCode: {
      type: String,
      required: true
    }
  }
)

userSchema.pre('save', async function(done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'))
    this.set('password', hashed)
  }
})

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

export { User }