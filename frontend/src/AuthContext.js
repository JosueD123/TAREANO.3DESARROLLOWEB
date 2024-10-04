// src/AuthContext.js
import React, { createContext, useState } from 'react';

// Crear el contexto
export const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado para almacenar el usuario

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};


