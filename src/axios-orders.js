import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fashion-9bef4.firebaseio.com/'
});

export default instance;