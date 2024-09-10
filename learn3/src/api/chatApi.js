import axios from 'axios';

const API_URL = 'http://localhost:8080/api/chats';

export const createChat = async (userId) => {
    try {
        const response = await axios.post(`${API_URL}/create`, { userId });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserChats = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/user/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// │   ├── messageApi.js
// │   ├── 
// │   ├── 
// │   ├── 
// │   └── 
// │
// ├── components/
// │   ├── Auth/
// │   │   ├── Login.js
// │   │   └── 
// │   ├── Chat/
// │   │   ├── 
// │   │   └── 
// │   ├── /
// │   │   └── 
// │   ├── /
// │   │   └── 
// │   ├──/
// │   │   ├── 
// │   │   └── 
// │   ├── /
// │   │   └── 
// │   ├── /
// │   │   └── 
// │   └── /
// │       ├── 
// │       └── 
// │
// ├── /
// │   └── 
// │
// ├── App.js
// ├── index.js
// └── styles.css