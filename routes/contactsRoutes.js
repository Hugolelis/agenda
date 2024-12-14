import express from 'express'
export const router = express.Router()

import { ContactsController } from '../controllers/ContactsController.js'

router.get('/add', ContactsController.contactAdd)
router.post('/add', ContactsController.contactAddSave)
router.post('/delete/:id', ContactsController.contactDelete)
router.get('/edit/:id', ContactsController.contactEdit)
router.post('/edit', ContactsController.contactEditSave)
router.get('/', ContactsController.showContacts)
