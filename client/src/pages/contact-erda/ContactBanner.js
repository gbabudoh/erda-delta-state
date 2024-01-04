import React from 'react';
import './ContactBanner.css'; // CSS file for ContactBanner
import contactImage from '../../assets/images/logon-icon/erda-con.png'; // Path to your image

const ContactBanner = () => {
  return (
    <div className="cb">
      <img src={contactImage} alt="" className="cb-image"/>
      <div className="cb-content">
        <h3>Contact ERDA Office</h3> {/* Update the title as needed */}
      </div>
    </div>
  );
};

export default ContactBanner;
