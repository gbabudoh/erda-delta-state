import React from 'react';
import './DaBanner.css'; // CSS file for DaBanner
import daImage from '../../assets/images/logon-icon/erda-con.png' // Path to your image

const DaBanner = () => {
  return (
    <div className="da">
      <img src={daImage} alt="" className="da-image"/>
      <div className="da-content">
        <h3>Diaspora Affairs</h3>
      </div>
    </div>
  );
};

export default DaBanner;

