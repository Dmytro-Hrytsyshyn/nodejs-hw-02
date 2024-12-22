
import {Router} from 'express';
  import * as contactController from '../controllers/contacts.js';
   
  import {ctrlWraper} from "../utils/ctrlWraper.js";

  const contactsRouter = Router();

  contactsRouter.get('/', ctrlWraper(contactController.getContactController) );

  contactsRouter.get('/:id', ctrlWraper(contactController.getContactByIdController) );

  export default contactsRouter;