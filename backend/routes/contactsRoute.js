import express from "express";
import ContactPortfolio from "../models/contacts.js";
import { transporter } from "../config/mailer.js";
import dotenv from "dotenv";

// Carica le variabili d'ambiente
dotenv.config();

const router = express.Router();

const API_KEY = process.env.API_KEY;

// Definizione di una rotta GET per ottenere una lista dei messaggi con paginazione e ordinamento
router.get("/", async (req, res) => {
  const apiKey = req.headers["x-api-key"];

  if (apiKey !== API_KEY) {
    return res
      .status(403)
      .json({ message: "Accesso proibito: API key non valida" });
  }

  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 16;
    const sort = req.query.sort || "name";
    const sortDirection = req.query.sortDirection === "desc" ? -1 : 1;
    const skip = (page - 1) * limit;

    const contacts = await ContactPortfolio.find({})
      .sort({ [sort]: sortDirection })
      .skip(skip)
      .limit(limit);

    const total = await ContactPortfolio.countDocuments();

    res.json({
      contacts,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalContacts: total,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Definizione di una rotta POST per ricevere un messaggio di contatto dalla pagina portfolio
router.post("/", async (req, res) => {
  const { name, lastname, email, message } = req?.body;
  // const newContactData = req.body;
  
  // Creazione e salvataggio del contatto
  const contact = new ContactPortfolio(
    {
      name,
      lastname,
      email,
      message,
    }
  );
  
  try {
    const newContact = await contact.save();

    // Invio email di conferma tramite Nodemailer
    await transporter.sendMail({
      from: '"Portfolio" <studio.nagcas@outlook.it>', // Controlla l'indirizzo email mittente
      to: newContact.email, // Invia email al contatto
      subject: "Conferma di ricezione del tuo messaggio",
      html: `
        <p>Ciao <strong>${newContact.name}</strong>,</p>
        <p>Grazie per averci contattato tramite il <strong>Portfolio di Gianluca Chiaravalloti</strong>.</p>
        <p>Abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto.</p>
        </br>
        <p><strong>Questo è il tuo messaggio:</strong></p>
        <p>${newContact.message}</p>
        </br>
        <p>Se desideri fornire ulteriori dettagli, non esitare a rispondere a questa email.</p>
        <p>Grazie per la tua pazienza,</p>
        <p><strong>Dott. Gianluca Chiaravalloti</strong></p>
      `,
    });

    // Invio email di contatto tramite Nodemailer
    await transporter.sendMail({
      from: `Portfolio <${newContact.email}>`,
      to: process.env.USER_MAILER, // Invia email all'indirizzo specificato nelle variabili d'ambiente
      subject: "Hai ricevuto un messaggio di contatto",
      html: `
        <p>Ciao Dott. Gianluca Chiaravalloti,</p>
        <p>Hai ricevuto un nuovo messaggio tramite il <strong>Portfolio di Gianluca Chiaravalloti</strong>.</p>
        </br>
        <p><strong>Dettagli del contatto:</strong></p>
        <p><strong>Nome:</strong> ${newContact.name}</p>
        <p><strong>Cognome:</strong> ${newContact.lastname}</p>
        <p><strong>Email:</strong> ${newContact.email}</p>
        </br>
        <p><strong>Messaggio:</strong></p>
        <p>${newContact.message}</p>
        </br>
        <p>Se desideri fornire ulteriori dettagli o rispondere al messaggio, puoi farlo direttamente rispondendo a questa email.</p>
        <p>Grazie per la tua attenzione,</p>
        <p><strong>Il Team del Portfolio</strong></p>
      `,
    });

    res.status(201).json(newContact);
  } catch (err) {
    console.error("Errore durante il salvataggio o l'invio dell'email:", err);
    res.status(400).json({
      message: "Errore del server, impossibile processare la richiesta!",
    });
  }
});

// Definizione di una route DELETE per eliminare un messaggio di un utente
router.delete("/:contactId", async (req, res) => {
  const apiKey = req.headers["x-api-key"];

  if (apiKey !== API_KEY) {
    return res
      .status(403)
      .json({ message: "Accesso proibito: API key non valida" });
  }

  try {
    const deleteContact = await ContactPortfolio.findByIdAndDelete(
      req.params.contactId
    );
    if (!deleteContact) {
      return res
        .status(404)
        .json({ message: "Contatto non presente nel database!" });
    }

    res.json({ message: "Messaggio eliminato con successo!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
