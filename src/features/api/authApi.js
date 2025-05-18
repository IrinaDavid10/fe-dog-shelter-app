import axios from "axios";
const API_URL = 'http://localhost:8080';


export const loginAdmin = async(username,password) => {
    try{
    const x =  await axios.post(API_URL + "/admin/loginAdmin",{username, password});
    return x.data;
    }catch(e){
        console.error("Error logging in", e);
        return null;
    }
}