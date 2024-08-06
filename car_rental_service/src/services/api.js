// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Update with your backend URL

// Admin services
export const postCar = async (carData) => {
    console.log("colling the post car" , carData);

    try{
        const jwt = localStorage.getItem("token");
        console.log(jwt  , "Token" , carData)
     
        const response = await axios.post(`http://localhost:8080/api/admin/car`, carData, {
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${jwt}`}
          });
          return response.data;
    }catch(err){
        console.log(err.message , err , "error")
    }
  
};

export const getAllCars = async () => {
  const response = await axios.get(`${API_URL}/admin/cars`);
  return response.data;
};

export const deleteCar = async (carId) => {
  const response = await axios.delete(`${API_URL}/admin/car/${carId}`);
  return response.data;
};

export const getCarById = async (carId) => {
  const response = await axios.get(`${API_URL}/admin/car/${carId}`);
  return response.data;
};

export const updateCar = async (carId, carData) => {
  const response = await axios.put(`${API_URL}/admin/car/${carId}`, carData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return response.data;
};

export const getBookings = async () => {
  const response = await axios.get(`${API_URL}/admin/car/bookings`);
  return response.data;
};

export const changeBookingStatus = async (bookingId, status) => {
  const response = await axios.get(`${API_URL}/admin/car/booking/${bookingId}/${status}`);
  return response.data;
};

export const searchCar = async (searchData) => {
  const response = await axios.post(`${API_URL}/admin/car/search`, searchData);
  return response.data;
};

// Auth services
export const signup = async (signupData) => {
  const response = await axios.post(`${API_URL}/auth/signup`, signupData);
  return response.data;
  
};

export const login = async (loginData) => {
    const response = await axios.post(`${API_URL}/auth/login`, loginData);
    console.log(response.data, "authenticationToken")
    return response.data;
};

// Customer services
export const bookACar = async (bookingData) => {
  const response = await axios.post(`${API_URL}/customer/car/book`, bookingData);
  return response.data;
};

export const getCarsByCustomer = async () => {
  const response = await axios.get(`${API_URL}/customer/cars`);
  return response.data;
};

export const getCarByCustomerId = async (carId) => {
  const response = await axios.get(`${API_URL}/customer/car/${carId}`);
  return response.data;
};

export const getBookingsByUserId = async (userId) => {
  const response = await axios.get(`${API_URL}/customer/car/bookings/${userId}`);
  return response.data;
};

export const searchCarByCustomer = async (searchData) => {
  const response = await axios.post(`${API_URL}/customer/car/search`, searchData);
  return response.data;
};
