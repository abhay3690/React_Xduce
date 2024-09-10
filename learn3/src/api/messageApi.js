import axios from 'axios';

const API_URL = 'http://localhost:8080/api/messages';

export const createMessage = async (messageData) => {
    try {
        const response = await axios.post(`${API_URL}/create`, messageData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getChatMessages = async (chatId) => {
    try {
        const response = await axios.get(`${API_URL}/chat/${chatId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
