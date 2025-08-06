import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // In a real app, clear tokens/session here
        alert('You have been logged out.');
        navigate('/');
    }, [navigate]);

    return (
        <div className="container page-section">
            <h2>Logging you out...</h2>
        </div>
    );
};

export default LogoutPage;