import express from "express";
import ContactPortfolio from "../models/contacts.js";
import { transporter } from "../config/mailer.js";
import dotenv from "dotenv";

// Carica le variabili d'ambiente
dotenv.config();

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newContactData = req.body;

    // Creazione e salvataggio del contatto
    const newContact = new ContactPortfolio(newContactData);
    await newContact.save();

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
    res
      .status(500)
      .json({
        message: "Errore del server, impossibile processare la richiesta!",
      });
  }
});

export default router;

