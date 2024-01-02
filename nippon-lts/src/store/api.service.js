import axios from "axios";
const api = axios
const url = 'http://locahost'

//SignUp
const SignUp = async (username, password) => {
    return api.post(`${url}/signup`, { username, password })
}

const SignIn = async (username, password) => {
    return api.post(`${url}/login`, { username, password })
}

export default {
    SignUp,
    SignIn
}