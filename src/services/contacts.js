import { ContactCollection } from '../db/models/contactShema.js';

export const getContacts = () => ContactCollection.find();

export const getContactById = (id) => ContactCollection.findById(id);
