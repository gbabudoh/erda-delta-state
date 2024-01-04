import React from 'react';
import './Footer.css'; // Importing the CSS file
import logo from '../../assets/images/logo/erda-logo2.png'; // Replace with the path to your logo

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© Office of External Relations & Diaspora Affairs, Delta State || Website by Egobas Limited - <a href="http://www.egobas.com" target="_blank" rel="noopener noreferrer">www.egobas.com</a></p>
                <img src={logo} alt="Logo" className="footer-logo" />
            </div>
        </footer>
    );
}

export default Footer;


