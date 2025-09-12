import { Router } from 'express';
import {
  createContactsController,
  deleteContactController,
  getContactsByIdController,
  getContactsController,
  patchContactsController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactsSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getContactsController));

router.get(
  '/:contactId',
  isValidId,
  ctrlWrapper(getContactsByIdController),
);

router.post(
  '/',
  validateBody(createContactsSchema),
  ctrlWrapper(createContactsController),
);

router.patch(
  '/:contactId',
  validateBody(updateContactSchema),
  isValidId,
  ctrlWrapper(patchContactsController),
);

router.delete(
  '/:contactId',
  isValidId,
  ctrlWrapper(deleteContactController),
);

export default router;
