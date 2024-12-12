import express from 'express'
export const router = express.Router()

import { ContactsController } from '../controllers/ContactsController.js'

router.get('/add', ContactsController.contactAdd)
router.get('/edit/:id', ContactsController.contactEdit)
router.get('/', ContactsController.showContacts)
