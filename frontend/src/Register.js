import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    const [form, setForm] = useState({ name: '', dpi: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/register', form);
            navigate('/login');
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: '25rem' }}>
                <h2 className="text-center mb-4">Registro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            placeholder="Nombre" 
                            value={form.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dpi" className="form-label">DPI</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="dpi" 
                            name="dpi" 
                            placeholder="DPI" 
                            value={form.dpi} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
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
                    <button type="submit" className="btn btn-primary w-100">Registrarse</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
