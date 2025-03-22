// Connessione a MongoDB
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export function connectMongo () {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connesso correttamente.'))
    .catch((error) => console.error('MongoDB: errore di connessione.', error))
}
