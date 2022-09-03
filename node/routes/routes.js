import express, { Router } from 'express'
import { createClient, deleteClient, getAllClients, getClient, updateClient } from '../controllers/ClientController.js'
const router = express.Router()

router.get('/', getAllClients)
router.get('/:id', getClient)
router.post('/', createClient)
router.put('/:id', updateClient)
router.delete('/:id', deleteClient)

export default router