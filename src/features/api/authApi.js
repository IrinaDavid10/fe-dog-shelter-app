import axios from "axios";
import { useState } from "react";

const API_URL = 'http://localhost:8080';

// Login admin
export function login(){ 
   
    axios.post(API_URL +'/admin/loginAdmin', 
        {username:'admin1',
        password:'password123'
    })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}


/*
// Extract the role from JWT
export const extractRoleFromToken = (token) => {
    try{
        const payload = token.split('.')[1];
        const decodedPayload = atob(payload);
        const data = JSON.parse(decodedPayload);

        if(data.roles && Array.isArray(data.roles)){
            return data.roles[0];
        }
        return '';
    }catch (error){
        console.error('Error decoding token: ', error);
        return '';
    }
};

// Check if user is admin
export const isAdmin = () => {
    const role = localStorage.getItem('userRole');
    return role === 'ROLE_ADMIN';
};

// Get token
export const getToken = () => {
    return localStorage.getItem('token');
}

// Set token and role
export const setAuthData = (token) => {
    localStorage.setItem('token', token);
    const role = extractRoleFromToken(token);
    localStorage.setItem('userRole', role);
    return role;
};

// Clear authentication data
export const clearAuthData = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
};
*/