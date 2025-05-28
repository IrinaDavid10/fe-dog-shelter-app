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
    try{
    const token = localStorage.getItem('token');
    console.log("Token being sent:", token);
    const response = await axios.get(API_URL + `/dogs/${id}`, {
        headers:{
            Authorization: token ? `Bearer ${token}` : ''
        }
        });
    return response.data;
    }catch(e){
        console.error("Error finding dog with specified id", e);
        return null;
    }
}

export const deleteDog = async(id) => {
    try{
        const response = await axios.delete(API_URL + `/dogs/${id}`);
        return response.data;
    }catch(e){
        console.log("Error deleting dog with specified id");
        return null;
    }
}