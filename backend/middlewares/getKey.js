import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;

export const getKey = () => {
  const apiKey = req.headers["x-api-key"];

  if (apiKey !== API_KEY) {
    return res
      .status(403)
      .json(
        { 
          message: "Accesso proibito: API key non valida!" 
        }
      );
  }
}