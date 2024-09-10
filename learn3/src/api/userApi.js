import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

export const getUserById = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const followUser = async (reqUserId, userId2) => {
    try {
        const response = await axios.post(`${API_URL}/follow`, { reqUserId, userId2 });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateUser = async (userId, userData) => {
    try {
        const response = await axios.put(`${API_URL}/update/${userId}`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const searchUsers = async (query) => {
    try {
        const response = await axios.get(`${API_URL}/search`, { params: { query } });
        return response.data;
    } catch (error) {
        throw error;
    }
};
