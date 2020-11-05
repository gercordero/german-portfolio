import axios from "axios"

export const sendMessage = async message => {
  const contactUrl = `${process.env.GATSBY_BACKEND_URL}/api/contact`

  try {
    const res = await axios.post(contactUrl, message)
    return res.data
  } catch (error) {
    return error.response.data
  }
}
