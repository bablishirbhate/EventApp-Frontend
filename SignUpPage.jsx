import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link

const SignUpPage = () => {
    const navigate = useNavigate();

    // State to hold all form field data
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        address: ''
    });

    const [error, setError] = useState('');     // State for validation errors
    const [success, setSuccess] = useState(''); // State for success message

    // Generic handler to update state on input change
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    // Handler for form submission
    const handleSignup = (e) => {
        e.preventDefault();
        setError('');   // Clear previous messages
        setSuccess('');

        // --- Client-Side Validation ---
        const { username, email, password, confirmPassword } = formData;
        if (!username || !email || !password || !confirmPassword) {
            setError('Please fill out all required fields.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        // --- Simulating a successful API call to a backend server ---
        console.log('Registering user with data:', formData);

        // On success:
        setSuccess('Signup successful! Redirecting you to the login page...');
        
        // Clear form data after successful signup
        setFormData({
            username: '', email: '', phone: '', password: '', confirmPassword: '', address: ''
        });

        // Automatically redirect the user to the login page after a short delay
        setTimeout(() => {
            navigate('/login');
        }, 3000); // 3-second delay
    };

    return (
        <div className="form-container">
            <h2>Create Your Account</h2>
            <form onSubmit={handleSignup}>
                {/* Display error or success messages */}
                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}
                
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
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        required 
                        value={formData.confirmPassword}
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

                <button type="submit" className="btn-primary" style={{width: '100%', padding: '15px'}}>Create Account</button>
            </form>
            <p style={{ textAlign: 'center', marginTop: '20px' }}>
                Already have an account? <Link to="/login" style={{ color: '#8a2be2' }}>Login here</Link>
            </p>
        </div>
    );
};

export default SignUpPage;