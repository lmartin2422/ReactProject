import axios from 'axios';  // allows request to the remote API

export default axios.create({
    baseURL:'http://localhost:8080', // api endpoint
    headers: {"ngrok-skip-browser-warning": "true"}  // helps endpoint not be blocked by CORS
}); 