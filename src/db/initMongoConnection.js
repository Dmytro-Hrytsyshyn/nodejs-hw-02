import mongoose from 'mongoose';
import 'dotenv/config';

import { getEnvVar } from '../utils/getEnvVar.js';

const db_host = getEnvVar('MONGODB_HOST');

export const initMongoConnection = async () => {
  try {
    await mongoose.connect(db_host);
    console.log('Mongo connections is successfully');
  } catch (error) {
    console.log(`Error connection ${error.message}`);
    throw error;
  }
};
