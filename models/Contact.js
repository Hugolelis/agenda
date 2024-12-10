import { DataTypes } from "sequelize";
import { sequelize as db } from "../db/conn.js";

export const Contact = db.define('Contact', {
    name: {
        type: DataTypes.STRING,
        required: true
    },

    email: {
        type: DataTypes.STRING,
        required: false
    },

    number: {
        type: DataTypes.STRING,
        required: false
    },
})