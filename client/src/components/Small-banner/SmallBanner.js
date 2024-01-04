import React from 'react';
import './SmallBanner.css'; // Ensure you have this CSS file in your project

const SmallBanner = () => {
    return (
        <div className="small-banner-container">
            <div className="small-banner-text">
                <h1>A Key Focus on Delta State Affairs</h1>
            </div>
            <div className="small-banner-video">
                <iframe
                    src="https://www.youtube.com/embed/Uk3pGGmSZRY?si=xIEOP7oZWwUh1aAq" // Replace with your YouTube video ID
                    title="Delta State Intro"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
};

export default SmallBanner;
