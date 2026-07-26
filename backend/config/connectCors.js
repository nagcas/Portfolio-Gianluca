import dotenv from 'dotenv'

dotenv.config()

const whitelist = [
  'http://localhost:5173', // Frontend sviluppo
  'https://portfolio-gianluca-phi.vercel.app' // Frontend produzione
]

const corsOptions = {
  origin: function (origin, callback) {
    console.log('Richiesta CORS da:', origin)

    // Permette richieste senza origin (Postman, server-to-server)
    if (!origin) {
      return callback(null, true)
    }

    if (whitelist.includes(origin)) {
      return callback(null, true)
    }

    return callback(new Error('PERMESSO NEGATO - CORS'))
  },

  methods: [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
    'OPTIONS'
  ],

  allowedHeaders: [
    'Content-Type',
    'Authorization'
  ],

  credentials: true
}

export default corsOptions
