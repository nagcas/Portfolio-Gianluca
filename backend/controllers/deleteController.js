import ContactPortfolio from '../models/contacts.js'

// Definizione di un controller DELETE per eliminare un messaggio di un utente
const deleteContact = async (req, res) => {
  try {
    const { contactId } = req.params

    const deleteContact = await ContactPortfolio.delete({ _id:contactId })
    
    if (!deleteContact) {
      return res
        .status(404)
        .json({ message: 'Contatto non presente nel database!' })
    }

    res.json({
      deleteContact,
      message: 'Messaggio eliminato con successo'
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

export default deleteContact
