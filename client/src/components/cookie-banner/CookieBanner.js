import React, { useState } from 'react';
import './CookieBanner.css'; // Importing the CSS file

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleReject = () => {
        // Implement reject functionality
        setIsVisible(false);
    };

    const handleAccept = () => {
        // Implement accept functionality
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-banner">
            <p>This website uses cookies to ensure you get the best experience on our website.</p>
            <div className="buttons">
                <button onClick={handleReject}>REJECT</button>
                <button onClick={handleAccept}>ACCEPT</button>
            </div>
        </div>
    );
};

export default CookieBanner;
