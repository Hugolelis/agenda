export class ContactsController {
    static async showContacts(req, res) {
        res.render('contacts/home')
    }
}