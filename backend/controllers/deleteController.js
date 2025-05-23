import ContactPortfolio from '../models/contacts.js'

// Definizione di un controller DELETE per eliminare un messaggio di un utente
const deleteContact = async (req, res) => {
  try {
    const deleteContact = await ContactPortfolio.findByIdAndDelete(
      req.params.contactId
    )
    if (!deleteContact) {
      return res
        .status(404)
        .json({ message: 'Contatto non presente nel database!' })
    }

    res.json({
      message: 'Messaggio eliminato con successo!'
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

export default deleteContact
