import axios from 'axios';

const setAuthToken = token => {
    if(token) {
        // add token to requests
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        //delete auth header if no token
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;