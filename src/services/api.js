// minha chave: 343b8bca0de5bc1b214d8d06127b13a447a7682d
import axios from 'axios'

export const key = '343b8bca0de5bc1b214d8d06127b13a447a7682d'

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    Authorization: `Bearer ${key}`,
  },
})

export default api
