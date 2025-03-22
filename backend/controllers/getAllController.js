import ContactPortfolio from '../models/contacts.js'

// Definizione di un controller GET per ottenere una lista dei messaggi con paginazione e ordinamento
const getAllContacts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 16
    const sort = req.query.sort || 'name'
    const sortDirection = req.query.sortDirection === 'desc' ? -1 : 1
    const skip = (page - 1) * limit

    const contacts = await ContactPortfolio.find({})
      .sort({ [sort]: sortDirection })
      .skip(skip)
      .limit(limit)

    const total = await ContactPortfolio.countDocuments()

    res.json({
      contacts,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalContacts: total
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

export default getAllContacts
