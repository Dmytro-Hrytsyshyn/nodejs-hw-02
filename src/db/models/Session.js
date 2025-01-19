import mongoose, { model } from 'mongoose';

import { handleSaveError, setUpdateSetting } from './hooks.js';

const sessionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    accessToken: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
    accessTokenValidUntil: {
      type: String,
      required: true,
    },
    refreshTokenValidUntil: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

sessionSchema.post('save', handleSaveError);
sessionSchema.pre('findOneAndUpdate', setUpdateSetting);
sessionSchema.post('findOneAndUpdate', handleSaveError);

const SessionCollection = model('session', sessionSchema);

export default SessionCollection;
