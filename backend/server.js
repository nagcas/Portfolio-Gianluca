// server.js

// Importa i pacchetti necessari
import express from "express";
import endpoints from "express-list-endpoints";
import mongoose from "mongoose";
import dotenv from "dotenv";
import contactsRoutes from "./routes/contactsRoute.js";
import cors from "cors";
import {
  badRequestHandler,
  genericErrorHandler,
  notFoundHandler,
} from "./middlewares/errorHandlers.js";

// Carica le variabili d'ambiente
dotenv.config();

// Inizializza l'app Express
const app = express();

const corsOptions = {
  origin: function (origin, callback) {
    // Definiamo una whitelist di origini consentite.
    // Queste sono gli URL da cui il nostro frontend farà richieste al backend.
    const whitelist = [
      "http://localhost:5173", // Frontend in sviluppo
      "https://portfolio-gianluca-phi.vercel.app", // Frontend in produzione (prendere da vercel!)
      "https://portfolio-gianluca.onrender.com", // URL del backend (prendere da render!)
    ];

    if (process.env.NODE_ENV === "development") {
      // In sviluppo, permettiamo anche richieste senza origine (es. Postman)
      callback(null, true);
    } else if (whitelist.indexOf(origin) !== -1 || !origin) {
      // In produzione, controlliamo se l'origine è nella whitelist
      callback(null, true);
    } else {
      callback(new Error("PERMESSO NEGATO - CORS"));
    }
  },
  credentials: true, // Permette l'invio di credenziali, come nel caso di autenticazione
  // basata su sessioni.
};

// Utilizza cors come middleware globale
app.use(cors(corsOptions));

// Middleware per il parsing del corpo delle richieste JSON
app.use(express.json());

// Connessione a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connesso"))
  .catch((err) => console.error("MongoDB: errore di connessione.", err));

// Definizione della porta su cui il server ascolterà
const PORT = process.env.PORT || 5000;

// Usa le rotte per gli utenti
app.use("/api/contacts-portfolio", contactsRoutes);

// Error handling middleware
app.use(badRequestHandler);
app.use(notFoundHandler);
app.use(genericErrorHandler);

// Avvio del server
app.listen(PORT, () => {
  console.log(`Server acceso sulla porta ${PORT}`);
  console.log("Sono disponibili i seguenti endpoints:");
  console.table(endpoints(app));
});
