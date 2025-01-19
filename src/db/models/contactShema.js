import mongoose from 'mongoose';

import { typeList } from '../../constant/contactsConst.js';

import { handleSaveError, setUpdateSetting } from './hooks.js';

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String },
    isFavourite: { type: Boolean, default: false },
    contactType: {
      type: String,
      enum: typeList,
      default: 'personal',
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);
export const sortByList = [
  '_id',
  'name',
  'phoneNumber',
  'email',
  'isFavourite',
  'contactType',
];
contactSchema.post('save', handleSaveError);
contactSchema.pre('findOneAndUpdate', setUpdateSetting);
contactSchema.post('findOneAndUpdate', handleSaveError);

export const ContactCollection = mongoose.model('contact', contactSchema);

const ContactsCollection = mongoose.model('contacts', contactSchema);

export default ContactsCollection;
