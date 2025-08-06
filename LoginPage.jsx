import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    // 1. State for all form fields
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        address: ''
    });

    const [error, setError] = useState(''); // State to hold login error messages

    // A single handler to update the state for any form field
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    // 2. Simulated Authentication Logic
    const handleLogin = (e) => {
        e.preventDefault(); // Prevent the form from reloading the page
        setError(''); // Clear previous errors

        // --- Basic Client-Side Validation ---
        // In a real app, you'd have more robust validation (e.g., check email format)
        if (!formData.username || !formData.email || !formData.password) {
            setError('Username, Email, and Password are required.');
            return;
        }

        // --- Simulating an API call to a backend server ---
        console.log('Sending login data to server:', formData);

        // This is a fake check. A real backend would verify credentials in a database.
        // For this demo, we'll just check if the password is "password123".
        if (formData.password === 'password123') {
            
            // --- On Successful Login ---
            
            // 1. Show success message
            alert('Login successful! Redirecting to the home page...');

            // 2. Store user data (e.g., in localStorage or a state management library like Redux/Context)
            // This allows other parts of your app to know the user is logged in.
            localStorage.setItem('user', JSON.stringify({ username: formData.username, email: formData.email }));
            localStorage.setItem('isAuthenticated', 'true');


            // 3. Redirect to the home page
            navigate('/'); 

        } else {
            // --- On Failed Login ---
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="form-container">
            <h2>Login </h2>
            <form onSubmit={handleLogin}>
                {/* Display error message if it exists */}
                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        required 
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        required 
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input 
                        type="tel" 
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        required 
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea 
                        id="address" 
                        rows="3"
                        value={formData.address}
                        onChange={handleInputChange}
                    ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{width: '100%', padding: '15px'}}>Login</button>
            </form>
            <p style={{ textAlign: 'center', marginTop: '20px' }}>
                Don't have an account? <Link to="/signup" style={{ color: '#8a2be2' }}>Sign up here</Link>
            </p>

        </div>
    );
};


export default LoginPage;