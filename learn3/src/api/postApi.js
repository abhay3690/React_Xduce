import axios from 'axios';

const API_URL = 'http://localhost:8080/api/posts';

export const createPost = async (postData) => {
    try {
        const response = await axios.post(`${API_URL}/create`, postData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deletePost = async (postId, userId) => {
    try {
        const response = await axios.delete(`${API_URL}/delete/${postId}`, { data: { userId } });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const likePost = async (postId, userId) => {
    try {
        const response = await axios.post(`${API_URL}/like`, { postId, userId });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getPostByUserId = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/user/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
