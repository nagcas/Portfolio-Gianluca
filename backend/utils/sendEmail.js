import { transporter } from '../config/mailer.js';

// Funzione per invio email di conferma tramite Nodemailer
export const sendEmailContact = async (newContact) => {
  const response = await transporter.sendMail({
    from: '"Portfolio" <studio.nagcas@outlook.it>', // Controlla l'indirizzo email mittente
    to: newContact.email, // Invia email al contatto
    subject: 'Conferma di ricezione del tuo messaggio',
    html: `
      <p>Ciao <strong>${newContact.name}</strong>,</p>
      <p>Grazie per averci contattato tramite il <strong>Portfolio di Gianluca Chiaravalloti</strong>.</p>
      <p>Abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto.</p>
      </br>
      <p><strong>Questo è il tuo messaggio:</strong></p>
      <p>${newContact.content}</p>
      </br>
      <p>Se desideri fornire ulteriori dettagli, non esitare a rispondere a questa email.</p>
      </hr>
      <p>Grazie per la tua pazienza,</p>
      <p><strong>Dr. Gianluca Chiaravalloti</strong></p>
    `,
  })
  console.log('Email inviata:', response)
}
