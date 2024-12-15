import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

import { getContacts, getContactById } from './services/contacts.js';

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

  app.get('/contacts', async (req, res) => {
    const data = await getContacts();
    res.json({
      status: 200,
      message: 'Successfully found contacts',
      data,
    });
  });

  app.get('/contacts/:id', async (req, res) => {
    const { id } = req.params;
    const data = await getContactById(id);

    if (!data) {
      return res.status(404).json({
        status: 404,
        message: `Contact with id=${id} not found`,
      });
    }

    res.json({
      status: 200,
      message: `Successfully found contact with id=${id}`,
      data,
    });
  });

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  const PORT = Number(getEnvVar('PORT', 3000));
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
