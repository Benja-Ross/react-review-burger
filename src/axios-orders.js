import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-builder-b6767.firebaseio.com/'
})

export default instance;
