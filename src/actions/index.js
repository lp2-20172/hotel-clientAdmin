import axios from 'axios'
const client = axios.create({
    baseURL: "https://hotel-serve.herokuapp.com/"
})
export default client