// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Header from './Header';
import { AuthProvider } from './AuthContext'; // Importa AuthProvider

const App = () => {
  return (
    <AuthProvider> {/* Asegúrate de que AuthProvider esté aquí */}
      <Router>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<h1>Bienvenido a la Aplicación</h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

