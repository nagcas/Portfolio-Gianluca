import dotenv from 'dotenv'

dotenv.config()

export const getKey = (req, res, next) => {
  const API_KEY = process.env.API_KEY
  const { apiKey } = req.query

  if (apiKey !== API_KEY) {
    return res.status(403).json({
      message: 'Accesso proibito: API key non valida!'
    })
  }
  next()
}
