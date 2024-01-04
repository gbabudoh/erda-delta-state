import React from 'react';
import './IdCardRegistration.css'; // Importing the CSS file
import deltaLogo from '../../assets/images/logo/delta-state-logo.png'; // Importing the logo image

const IdCardRegistration = () => {
    return (
        <div className="IdCardRegistration-container">
            <img src={deltaLogo} alt="Logo" className="IdCardRegistration-logo" />
            <h1 className="IdCardRegistration-coming-soon">Coming Soon</h1>
            <h1 className="IdCardRegistration-main-heading">ID CARD REGISTRATION FOR DELTA STATE INDIGENES</h1>
            <p className="IdCardRegistration-info-text">
                Use the Delta State Indigene ID card to unlock epic savings! From Hotels, flights, holidays, tuition – discounts galore, yours to explore!
            </p>
        </div>
    );
}

export default IdCardRegistration;
