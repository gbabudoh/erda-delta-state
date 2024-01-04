import React from 'react';
import './InvestBanner.css'; // CSS file for InvestBanner
import investImage from '../../assets/images/logon-icon/erda-con.png' // Path to your image

const InvestBanner = () => {
  return (
    <div className="ib">
      <img src={investImage} alt="" className="ib-image"/>
      <div className="ib-content">
        <h3>Investment Opportunities In Delta State, Nigeria</h3> {/* Update the title as needed */}
      </div>
    </div>
  );
};

export default InvestBanner;
