import React from 'react';
import './GovernorBanner.css'; // Make sure to create this CSS file
import governorImage from '../../assets/images/governor/gov1.jpg'


const GovernorBanner = () => {
    return (
        <div className="governor-banner">
            <div className="image-container">
                {/* Insert image URL here */}
                <img src={governorImage} alt="Governor" />
            </div>
            <div className="text-container">
                <h3 className='gb-h3'>The Delta State Governor</h3>
                <p className='gb-p'>Rt. Hon. Sheriff Francis Orohwedor Oborevwori</p>
            </div>
        </div>
    );
};

export default GovernorBanner;
