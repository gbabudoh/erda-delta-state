import React from 'react';
import './ErBanner.css'; // Updated CSS file name
import erImage from '../../assets/images/logon-icon/erda-con.png'

const ErBanner = () => {
  return (
    <div className="er">
      <img src={erImage} alt="" className="er-image"/>
      <div className="er-content">
        <h3>External Relations</h3>
      </div>
    </div>
  );
};

export default ErBanner;

