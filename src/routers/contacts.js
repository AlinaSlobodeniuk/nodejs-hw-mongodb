import { Router } from 'express';
import { createContactsController, deleteContactController, getContactsByIdController, getContactsController, patchContactsController } from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactsSchema, updateContactSchema } from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

  router.get('/contacts', ctrlWrapper(getContactsController));

   router.get('/contacts/:contactId', isValidId, ctrlWrapper(getContactsByIdController));

   router.post('/contacts', validateBody(createContactsSchema), ctrlWrapper(createContactsController));

   router.patch('/contacts/:contactId', validateBody(updateContactSchema), isValidId, ctrlWrapper(patchContactsController));

   router.delete('/contacts/:contactId', isValidId, ctrlWrapper(deleteContactController));

export default router;