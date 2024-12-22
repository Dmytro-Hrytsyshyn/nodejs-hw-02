
import {Router} from 'express';
  import * as contactController from '../controllers/contacts.js';

  const contactsRouter = Router();

  contactsRouter.get('/', contactController.getContactController );

  contactsRouter.get('/:id', contactController.getContactByIdController );

  export default contactsRouter;