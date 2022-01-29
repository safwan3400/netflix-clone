import { apiBaseUrl } from "./constants/constants";
const axios = require('axios')

export default axios.create({
    baseURL: apiBaseUrl
});