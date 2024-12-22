import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import contactsRouter from './routers/contact.js';

import { getEnvVar } from './utils/getEnvVar.js';

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  contactsRouter.use("/contacts", contactsRouter);

  
  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  const PORT = Number(getEnvVar('PORT', 3000));
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
