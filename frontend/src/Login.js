// src/Login.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './AuthContext'; // Importa AuthContext

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const { setUser } = useContext(AuthContext); // Asegúrate de que aquí uses AuthContext
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', form);
            setUser(response.data.user);
            navigate('/');
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: '25rem' }}>
                <h2 className="text-center mb-4">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email" 
                            placeholder="Email" 
                            value={form.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            name="password" 
                            placeholder="Contraseña" 
                            value={form.password} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
