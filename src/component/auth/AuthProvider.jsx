import React, {  createContext, useContext, useState , useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const logout = async () => {
        try {
            const token = localStorage.getItem('token'); 
            const response = await fetch("http://127.0.0.1:8000/api/logout", {
                method: "POST",
                headers: {
                  "Authorization": `Bearer ${localStorage.getItem('token')}`,
                  "Content-Type": "application/json"
                }
              });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Logout failed:', errorData.message);
            throw new Error(errorData.message || 'Logout failed');
        }
            localStorage.removeItem('token'); 
            setIsAuthenticated(false); 
        } catch (error) {
            console.error('Logout failed:', error);
            throw error; 
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
