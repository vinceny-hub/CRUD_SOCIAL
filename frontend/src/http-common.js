
// axios permit to pass and get informations from to frontend and from to backend 
import axios from "axios";

let user = JSON.parse(localStorage.getItem('user'));

// const API_URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:8080/api';
const API_URL = process.env.NODE_ENV === 'production/api'

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': 'Bearer ' + user.accessToken,
    "Content-type": "application/json",
    "Content-Type": "multipart/form-data"
  }
});

