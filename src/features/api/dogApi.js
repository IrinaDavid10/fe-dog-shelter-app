import axios from "axios";
const API_URL = 'http://localhost:8080';

export const getAllDogs = async() => {
    try{
    const token = localStorage.getItem('token');
    console.log("Token being sent:", token);
    const response = await axios.get(API_URL + "/dogs", {
        headers:{
            Authorization: token ? `Bearer ${token}` : ''
        }
        });
    return response.data;
    }catch(e){
        console.error("Error getting all dogs", e);
        return null;
    }
}

export const createDog = async(name, breed) => {
    try{
        const result = await axios.post(API_URL + "/dogs/create", {name, breed});
        return result.data;
    }catch(e){
        console.log("Error logging in", e);
        return null;
    }
}

export const getDog = async(id) => {
     const response = await axios.get(API_URL + `/dogs/${id}`);
    console.log("Full response:", response);
    console.log("Response data:", response.data);
    console.log("Dog name:", response.data.name);
    console.log("Dog breed:", response.data.breed);
    return response.data;
}