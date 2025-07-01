import ContactPortfolio from '../models/contacts.js'
import { sendEmailContact } from '../utils/sendEmail.js'
import handleHttpErrors from '../utils/handleHttpErrors.js'

// Definizione di un controller POST per ricevere un messaggio di contatto dalla pagina portfolio
const postContact = async (req, res) => {
  try {
    const { name, lastname, email, content } = req?.body
  
    // Creazione e salvataggio del contatto
    const contact = new ContactPortfolio({
      name,
      lastname,
      email,
      content
    })
    
    const newContact = await contact.save()

    // Invio email con il servizio di nodemailer
    await sendEmailContact(newContact)

    res.status(201).json(newContact)
  } catch (err) {
    handleHttpErrors({
      res,
      message: 'Errore del Server, impossibile procedere alla richiesta',
      code: 500
    })
  }
}

export default postContact
