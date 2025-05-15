import express from 'express';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  updateContactController,
  deleteContactController,
} from '../controllers/contacts.js';

const router = express.Router();

// GET всі контакти
router.get('/', getContactsController);

// GET по id
router.get('/:contactId', getContactByIdController);

// POST новий контакт
router.post('/', createContactController);

// PATCH оновлення контакту
router.patch('/:contactId', updateContactController);

// DELETE контакт
router.delete('/:contactId', deleteContactController);

export default router;
