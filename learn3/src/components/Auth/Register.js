import React, { useState } from 'react';
import { register } from '../../api/authApi';

const Register = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: ''
    });

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(userData);
            alert('Registration successful!');
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="firstName" 
                value={userData.firstName} 
                onChange={handleChange} 
                placeholder="First Name" 
                required 
            />
            <input 
                type="text" 
                name="lastName" 
                value={userData.lastName} 
                onChange={handleChange} 
                placeholder="Last Name" 
                required 
            />
            <input 
                type="email" 
                name="email" 
                value={userData.email} 
                onChange={handleChange} 
                placeholder="Email" 
                required 
            />
            <input 
                type="password" 
                name="password" 
                value={userData.password} 
                onChange={handleChange} 
                placeholder="Password" 
                required 
            />
            <select 
                name="gender" 
                value={userData.gender} 
                onChange={handleChange}
                required
            >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
