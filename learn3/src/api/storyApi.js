import axios from 'axios';

const API_URL = 'http://localhost:8080/api/stories';

export const createStory = async (storyData) => {
    try {
        const response = await axios.post(`${API_URL}/create`, storyData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getStoriesByUserId = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/user/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
