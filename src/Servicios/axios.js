import axios from 'axios'

export const API = axios.create({
    baseURL: `http://ec2-3-92-179-17.compute-1.amazonaws.com/api/v1/`,
})