import express from 'express'
export const router = express.Router()

import { ContactsController } from '../controllers/ContactsController.js'

router.get('/', ContactsController.showContacts)