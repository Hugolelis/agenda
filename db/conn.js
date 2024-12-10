import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('agenda', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Connected to BD')
} catch(e) {
    console.log(e)
}