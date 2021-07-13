
// axios permit to pass and get informations from to frontend and from to backend 
import axios from "axios";

let user = JSON.parse(localStorage.getItem('user'));
// let accessToken;

// if (process.env.NODE_ENV === 'production'){
//     accessToken = user.accessToken;
// } else {
//     accessToken = user ? user.accessToken : ''
// }

const API_URL = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:3000/api/';

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': 'Bearer ' + user.accessToken ,
    "Content-type": "application/json",
    "Content-Type": "multipart/form-data"
  }
});
