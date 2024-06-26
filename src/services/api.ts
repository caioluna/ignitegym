import axios from 'axios'
import { AppError } from '@utils/AppError'

const BASE_URL = 'http://192.168.15.145:3333'

const api = axios.create({
  baseURL: BASE_URL
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message))
    } else {
      return Promise.reject(error)
    }
  }
)

export { api }