import axios from 'axios'
const baseUrl = 'http://localhost:3001/messages'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = async(newObject) => {
    const response = await axios.post(baseUrl, newObject)
    return response.data
}

export default { getAll, create }