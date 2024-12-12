export class ContactsController {
    static async showContacts(req, res) {
        res.render('contacts/home')
    }

    static contactAdd(req, res) {
        res.render('contacts/add')
    }

    static async contactEdit(req, res) {
        res.render('contacts/edit')
    }
}