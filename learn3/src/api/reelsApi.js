import axios from 'axios';

const API_URL = 'http://localhost:8080/api/reels';

export const createReels = async (reelsData) => {
    try {
        const response = await axios.post(`${API_URL}/create`, reelsData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllReels = async () => {
    try {
        const response = await axios.get(`${API_URL}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserReels = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/user/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
