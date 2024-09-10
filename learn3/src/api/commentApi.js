import axios from 'axios';

const API_URL = 'http://localhost:8080/api/comments';

export const createComment = async (commentData) => {
    try {
        const response = await axios.post(`${API_URL}/create`, commentData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const likeComment = async (commentId, userId) => {
    try {
        const response = await axios.post(`${API_URL}/like`, { commentId, userId });
        return response.data;
    } catch (error) {
        throw error;
    }
};
