import axios from "axios";
const API_URL = 'http://localhost:8080';

export const getAllDogs = async() => {
    const token = localStorage.getItem('token');
    console.log("Token being sent:", token);
    const response = await axios.get(API_URL + "/dogs", {
        headers:{
            Authorization: token ? `Bearer ${token}` : ''}});
    return response.data;
}