import { getEnvVar } from './utils/getEnvVar.js';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routers/auth.js';

import contactsRouter from './routers/contact.js';
// import { logger } from './middlewares/logger.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());
  app.use('/auth', authRouter);
  app.use('/contacts', contactsRouter);
  app.use('/contacts/:contactId', contactsRouter);
  app.use(notFoundHandler);
  app.use(errorHandler);

  const PORT = Number(getEnvVar('PORT', 3000));
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
