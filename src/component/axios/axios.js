import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-c602f/us-central1/api' //API Url 
});

export default instance;