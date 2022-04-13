import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';
import '../../images/bg.jpg';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className='not-found-container'>
            <h2>Oops! Page Not Found.</h2>
            <h1>404</h1>
            <p>We can't find the page you are looking for.</p>
            <button className='back-btn' onClick={() => navigate('/')}>Go Back</button>
        </div>
    );
};

export default NotFound;