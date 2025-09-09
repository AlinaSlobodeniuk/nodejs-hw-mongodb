import { Router } from 'express';
import { createContactsController, deleteContactController, getContactsByIdController, getContactsController, patchContactsController } from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

  router.get('/contacts', ctrlWrapper(getContactsController));

   router.get('/contacts/:contactId', ctrlWrapper(getContactsByIdController));

   router.post('/contacts', ctrlWrapper(createContactsController));

   router.patch('/contacts/:contactId', ctrlWrapper(patchContactsController));

   router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

export default router;