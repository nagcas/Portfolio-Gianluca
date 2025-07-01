import { Schema, model } from 'mongoose'

// Schema contacts
const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    lastname: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      lowercase: true
    },
    content: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false,
    collection: 'contactsPortfolio'
  }
)

// Creazione del modello contatti basato sullo schema contactsSchema
const ContactPortfolio = model('contactPortfolio', contactsSchema)

// Esportazione del modello User
export default ContactPortfolio
