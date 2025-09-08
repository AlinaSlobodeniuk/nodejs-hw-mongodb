import { Router } from 'express';
import { CreateContactsController, deleteContactController, getContactsByIdController, getContactsController, patchContactsController } from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

  router.get('/contacts', ctrlWrapper(getContactsController));

   router.get('/contacts/:contactId', ctrlWrapper(getContactsByIdController));

   router.post('/contacts', ctrlWrapper(CreateContactsController));

   router.patch('/contacts/:contactId', ctrlWrapper(patchContactsController));

   router.delete('/contacts/:contactsId', ctrlWrapper(deleteContactController));

export default router;