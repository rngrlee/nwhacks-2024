import axios from 'axios'
const baseUrl = 'http://localhost:3001/login'

const login = async ({ username, password }) => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { login }