import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../../assets/images/logo/erda-logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false); // This will close the navbar when a link is clicked
    }

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" onClick={handleLinkClick}>
                    <img src={logoImage} alt="Logo" />
                </Link>
            </div>
            <div className={`nav-items ${isOpen ? 'open' : ''}`}>
                <Link to="/governors-office" onClick={handleLinkClick}>Governor's<br/>Office</Link>
                <Link to="/external-relations" onClick={handleLinkClick}>External<br/>Relations</Link>
                <Link to="/diaspora-affairs" onClick={handleLinkClick}>Diaspora<br/>Affairs</Link>
                <Link to="/investment-opportunities" onClick={handleLinkClick}>Investment<br/>Opportunities</Link>
                <Link to="/events-training" onClick={handleLinkClick}>Events<br/>& Training</Link>
                <Link to="/contact-erda" onClick={handleLinkClick}>Contact<br/>ERDA</Link>
            </div>
            <div className="id-card-button-container">
                <Link to="/id-card-registration" onClick={handleLinkClick} className="id-card-link" target="_blank">
                    <button className="id-card-registration-btn">ID Card<br/>Registration</button>
                </Link>
            </div>
            <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'CLOSE' : 'MENU'}
            </div>
        </nav>
    );
};

export default Navbar;

