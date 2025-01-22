import { Router } from 'express';
import * as contactController from '../controllers/contacts.js';

import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';
import { validateBody } from '../utils/validateBody.js';

import {
  contactsAddSchema,
  contactUpdateSchema,
} from '../validation/contactsSchema.js';

import { ctrlWraper } from '../utils/ctrlWraper.js';

const contactsRouter = Router();

contactsRouter.use(authenticate);

contactsRouter.get('/', ctrlWraper(contactController.getContactsController));

contactsRouter.get(
  '/:id',
  isValidId,
  ctrlWraper(contactController.getContactByIdController),
);

contactsRouter.post(
  '/',
  validateBody(contactsAddSchema),
  ctrlWraper(contactController.addContactController),
);

contactsRouter.put(
  '/:id',
  isValidId,
  validateBody(contactsAddSchema),
  ctrlWraper(contactController.upsertContactController),
);

contactsRouter.delete(
  '/:id',
  isValidId,
  ctrlWraper(contactController.deleteContactController),
);

export default contactsRouter;
