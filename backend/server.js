// server.js

// Importa i pacchetti necessari
import express from 'express'
import endpoints from 'express-list-endpoints'
import dotenv from 'dotenv'
import contactsRoutes from './routes/contactsRoute.js'
import cors from 'cors'
import {
  badRequestHandler,
  genericErrorHandler,
  notFoundHandler
} from './middlewares/errorHandlers.js'
import corsOptions from './config/connectCors.js'
import { connectMongo } from './config/connectMongoDB.js'
import { PORT } from './config/connectPort.js'

// Carica le variabili d'ambiente
dotenv.config()

// Inizializza l'app Express
const app = express()

// Utilizza cors come middleware globale
app.use(cors(corsOptions))

// Middleware per il parsing del corpo delle richieste JSON
app.use(express.json())

// const PORT = process.env.PORT || 5000;

// Usa le rotte per gli utenti
app.use('/api/contacts-portfolio', contactsRoutes)

// Error handling middleware
app.use(badRequestHandler)
app.use(notFoundHandler)
app.use(genericErrorHandler)

// Avvio del server
try {
  app.listen(PORT, () => {
    console.clear()
    console.log(`Server acceso sulla porta ${PORT}`)
    console.log('Sono disponibili i seguenti endpoints:')
    connectMongo()
    console.table(endpoints(app))
  })
} catch (error) {
  console.log(error.message)
}
