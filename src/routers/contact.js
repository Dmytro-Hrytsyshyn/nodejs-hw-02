
import {Router} from 'express';
  import * as contactController from '../controllers/contacts.js';
   
  import {ctrlWraper} from "../utils/ctrlWraper.js";

  const contactsRouter = Router();

  contactsRouter.get('/', ctrlWraper(contactController.getContactController) );

  contactsRouter.get('/:id', ctrlWraper(contactController.getContactByIdController));

  contactsRouter.post('/', ctrlWraper(contactController.addContactController) );

  contactsRouter.put('/:id', ctrlWraper(contactController.upsertContactController));

  contactsRouter.patch('/:id', ctrlWraper(contactController.patchContactController));

  contactsRouter.delete('/:id', ctrlWraper(contactController.deleteContactController));



  export default contactsRouter;