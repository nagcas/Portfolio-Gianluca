import express from 'express'
import getAllContacts from '../controllers/getAllController.js'
import postContact from '../controllers/postController.js'
import deleteContact from '../controllers/deleteController.js'
import { getKey } from '../middlewares/getKey.js'

const router = express.Router()

// Definizione di una rotta GET per ottenere una lista dei messaggi con paginazione e ordinamento
router.get('/get-all-contacts', getKey, getAllContacts)

// Definizione di una rotta POST per ricevere un messaggio di contatto dalla pagina portfolio
router.post('/create-contact', postContact)

// Definizione di una route DELETE per eliminare un messaggio di un utente
router.delete('/delete-contact/:contactId/', getKey, deleteContact)

export default router
