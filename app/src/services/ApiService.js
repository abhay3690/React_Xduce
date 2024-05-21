import axios from 'axios';

const ApiService = {
  getData: () => {
    return axios.get('/api/data'); // Assuming backend API endpoint is /api/data
  }
};

export default ApiService;