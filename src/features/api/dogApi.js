import apiClient from "./apiClient";

const API_URL = 'http://localhost:8080';

export const getAllDogs = async() => {
    const response = await apiClient.get('/dogs');
    return response.data;
}