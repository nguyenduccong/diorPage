import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://60fa72f27ae59c001716613f.mockapi.io/api',
    headers: {
        'Content-Type' : 'application/json',
    }
})

export default axiosClient;