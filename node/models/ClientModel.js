import db from "../database/db.js"

import { DataTypes } from "sequelize";

const ClientModel = db.define('clients', {
    name: { type: DataTypes.STRING},
    telephone: { type: DataTypes.STRING},
    address: { type: DataTypes.STRING}
})

export default ClientModel