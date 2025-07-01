const handleHttpErrors = ({ res, message, code }) => {
  res.status(code).json({ error: message})
  console.error(message)
}

export default handleHttpErrors