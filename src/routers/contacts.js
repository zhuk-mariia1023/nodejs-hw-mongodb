import { Router } from 'express';
import {
  getContactController,
  getContactByIdController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactController));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

export default router;
