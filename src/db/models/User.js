import mongoose from 'mongoose';

import { handleSaveError, setUpdateSetting } from './hooks.js';
import { emailRegexp } from '../../constant/User.js';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

userSchema.post('save', handleSaveError);
userSchema.pre('findOneAndUpdate', setUpdateSetting);
userSchema.post('findOneAndUpdate', handleSaveError);

const UserCollection = mongoose.model('user', userSchema);
export default UserCollection;
