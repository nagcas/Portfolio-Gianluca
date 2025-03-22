import dotenv from 'dotenv'

dotenv.config()

const API_KEY = process.env.API_KEY

export const getKey = (req, res) => {
  const apikey = req.params.apiKey

  if (apikey !== API_KEY) {
    return res.status(403).json({
      message: 'Accesso proibito: API key non valida!'
    })
  }
}
