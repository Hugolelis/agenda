import { where } from "sequelize"
import { Contact } from "../models/Contact.js"

export class ContactsController {
    static async showContacts(req, res) {
        const contact = await Contact.findAll({raw: true})

        res.render('contacts/dashboard', { contact })
    }

    static async contactDelete(req, res) {
        const { id } = req.params

        await Contact.destroy({where: { id: id }})

        res.redirect('/')
    }

    static contactAdd(req, res) {
        res.render('contacts/add')
    }
    
    static async contactAddSave(req, res) {
        const { name, email, number } = req.body

        const contact = {
            name,
            email,
            number
        }

        await Contact.create(contact)

        res.redirect('/')
    }

    static async contactEdit(req, res) {
        const { id } = req.params

        const contact = await Contact.findOne({raw: true, where: { id: id }})

        res.render('contacts/edit', { contact })
    }

    static async contactEditSave(req, res) {
        const { id, name, email, number } = req.body
        const updateContact = {
            name,
            email,
            number
        }

        await Contact.update(updateContact, {where: { id: id }})

        res.redirect('/')
    }
}