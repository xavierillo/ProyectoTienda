import express from "express"
import cors from 'cors'
import db from "./database/db.js"

import clientRoute from './routes/routes.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use('/clients', clientRoute)

try {
    await db.authenticate()
    console.log('conexion exitosa BD')
} catch (error) {
    console.log( `error en la conexion BD: ${error}`)
}

app.get('/', (req, res) => {
    res.send('hola mundo')
})

app.listen(8080, () => {
    console.log('server up server in')
})