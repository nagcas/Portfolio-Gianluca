import ContactPortfolio from '../models/contacts.js'
import { transporter } from '../config/mailer.js'

// Definizione di un controller POST per ricevere un messaggio di contatto dalla pagina portfolio
const postContact = async (req, res) => {
  const { name, lastname, email, content } = req?.body

  // Creazione e salvataggio del contatto
  const contact = new ContactPortfolio({
    name,
    lastname,
    email,
    content
  })

  try {
    const newContact = await contact.save()

    // Invio email di conferma tramite Nodemailer
    await transporter.sendMail({
      from: '"Portfolio" <studio.nagcas@outlook.it>', // Controlla l'indirizzo email mittente
      to: contact.email, // Invia email al contatto
      subject: 'Conferma di ricezione del tuo messaggio',
      html: `
        <p>Ciao <strong>${contact.name}</strong>,</p>
        <p>Grazie per averci contattato tramite il <strong>Portfolio di Gianluca Chiaravalloti</strong>.</p>
        <p>Abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto.</p>
        </br>
        <p><strong>Questo è il tuo messaggio:</strong></p>
        <p>${contact.content}</p>
        </br>
        <p>Se desideri fornire ulteriori dettagli, non esitare a rispondere a questa email.</p>
        <p>Grazie per la tua pazienza,</p>
        <p><strong>Dr. Gianluca Chiaravalloti</strong></p>
      `
    })

    // Invio email di contatto tramite Nodemailer
    await transporter.sendMail({
      from: `Portfolio <${contact.email}>`,
      to: process.env.USER_MAILER, // Invia email all'indirizzo specificato nelle variabili d'ambiente
      subject: 'Hai ricevuto un messaggio di contatto',
      html: `
        <p>Ciao Dr. Gianluca Chiaravalloti,</p>
        <p>Hai ricevuto un nuovo messaggio tramite il <strong>Portfolio di Gianluca Chiaravalloti</strong>.</p>
        </br>
        <p><strong>Dettagli del contatto:</strong></p>
        <p><strong>Nome:</strong> ${contact.name}</p>
        <p><strong>Cognome:</strong> ${contact.lastname}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        </br>
        <p><strong>Messaggio:</strong></p>
        <p>${contact.content}</p>
        </br>
        <p>Se desideri fornire ulteriori dettagli o rispondere al messaggio, puoi farlo direttamente rispondendo a questa email.</p>
        <p>Grazie per la tua attenzione,</p>
        <p><strong>Dr. Gianluca Chiaravalloti</strong></p>
      `
    })

    res.status(201).json(newContact)
  } catch (err) {
    console.error("Errore durante il salvataggio o l'invio dell'email:", err)
    res.status(400).json({
      message: 'Errore del server, impossibile processare la richiesta!'
    })
  }
}

export default postContact
