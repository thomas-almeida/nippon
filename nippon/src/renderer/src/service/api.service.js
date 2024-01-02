import axios from 'axios'
import service from './endpoints'
const api = axios


api.get(`${service.endpoints.user}`)

export default {
    api
}