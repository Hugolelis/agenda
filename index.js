import express from 'express'
import exphbs from 'express-handlebars'

const port = 3000
const app = express()

import { sequelize as conn } from './db/conn.js'

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

import { router as contactsRoutes } from './routes/contactsRoutes.js'
import { ContactsController } from './controllers/ContactsController.js'

app.use('/contacts', contactsRoutes)

app.get('/', ContactsController.showContacts)

conn.sync().then(() => {
    app.listen(port)
    console.log(`Server list in port ${port}`)
}).catch(e => {
    console.log(e)
})