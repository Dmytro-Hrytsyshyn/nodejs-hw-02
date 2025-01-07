import { Router } from 'express';
import * as contactController from '../controllers/contacts.js';

import { validateBody } from '../utils/validateBody.js';

import {
  contactsAddSchema,
  contactUpdateSchema,
} from '../validation/contactsSchema.js';

import { ctrlWraper } from '../utils/ctrlWraper.js';

const contactsRouter = Router();

contactsRouter.get('/', ctrlWraper(contactController.getContactController));

contactsRouter.get(
  '/:id',
  ctrlWraper(contactController.getContactByIdController),
);

contactsRouter.post(
  '/',
  validateBody(contactsAddSchema),
  ctrlWraper(contactController.addContactController),
);

contactsRouter.put(
  '/:id',
  validateBody(contactsAddSchema),
  ctrlWraper(contactController.upsertContactController),
);

contactsRouter.patch(
  '/:id',
  validateBody(contactUpdateSchema),
  ctrlWraper(contactController.patchContactController),
);

contactsRouter.delete(
  '/:id',
  ctrlWraper(contactController.deleteContactController),
);

export default contactsRouter;
