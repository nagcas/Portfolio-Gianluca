import dotenv from 'dotenv'

dotenv.config()

const corsOptions = {
  origin: function (origin, callback) {
  // Definiamo una whitelist di origini consentite.
  // Queste sono gli URL da cui il nostro frontend farà richieste al backend.
    const whitelist = [
      'http://localhost:5173', // Frontend in sviluppo
      'https://portfolio-gianluca-phi.vercel.app', // Frontend in produzione (prendere da vercel!)
      'https://portfolio-gianluca.onrender.com' // URL del backend (prendere da render!)
    ]

    if (process.env.NODE_ENV === 'development') {
      // In sviluppo, permettiamo anche richieste senza origine (es. Postman)
      callback(null, true)
    } else if (whitelist.indexOf(origin) !== -1 || !origin) {
      // In produzione, controlliamo se l'origine è nella whitelist
      callback(null, true)
    } else {
      callback(new Error('PERMESSO NEGATO - CORS'))
    }
  },
  credentials: true // Permette l'invio di credenziali, come nel caso di autenticazione
  // basata su sessioni.
}

export default corsOptions
