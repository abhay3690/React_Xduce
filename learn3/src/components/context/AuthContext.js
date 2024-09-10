// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(null);

    const login = (token) => {
        setAuthState(token);
    };

    const logout = () => {
        setAuthState(null);
    };

    return (
        <AuthContext.Provider value={{ token: authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
