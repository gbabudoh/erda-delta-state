import React from 'react';
import './EventBanner.css'; // CSS file for EventBanner
import eventImage from '../../assets/images/logon-icon/erda-con.png'; // Path to your image

const EventBanner = () => {
  return (
    <div className="eb">
      <img src={eventImage} alt="" className="eb-image"/>
      <div className="eb-content">
        <h3>Upcoming Events & Trainings</h3> {/* Update the title as needed */}
      </div>
    </div>
  );
};

export default EventBanner;
