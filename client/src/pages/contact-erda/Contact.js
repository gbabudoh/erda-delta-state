import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import './Contact.css'; // Import the CSS file

const Contact = () => {
    const [message, setMessage] = useState('');
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        state: '',
        city: '',
        reason: '',
        message: ''
    });

    useEffect(() => {
        setCountries(Country.getAllCountries());
    }, []);

    useEffect(() => {
        setStates(State.getStatesOfCountry(formData.country));
        setFormData(prev => ({ ...prev, state: '', city: '' }));
        setCities([]);
    }, [formData.country]);

    useEffect(() => {
        setCities(City.getCitiesOfState(formData.country, formData.state));
    }, [formData.state, formData.country]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Thank you for contacting the office of the external relations & diaspora affairs, we will respond to your email shortly');
        // Reset form fields
        setFormData({
            name: '',
            email: '',
            phone: '',
            country: '',
            state: '',
            city: '',
            reason: '',
            message: ''
        });
    };

    return (
        <div className="contact-container">
            {message && <div className="message">{message}</div>}
            <form onSubmit={handleSubmit} className="contact-form">
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Mobile Phone Number" value={formData.phone} onChange={handleChange} required />

                {/* Country Dropdown */}
                <select name="country" value={formData.country} onChange={handleChange} required>
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                        <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
                    ))}
                </select>

                {/* State Dropdown */}
                {states.length > 0 && (
                    <select name="state" value={formData.state} onChange={handleChange} required>
                        <option value="">Select State</option>
                        {states.map((state) => (
                            <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                        ))}
                    </select>
                )}

                {/* City Dropdown */}
                {cities.length > 0 && (
                    <select name="city" value={formData.city} onChange={handleChange} required>
                        <option value="">Select City</option>
                        {cities.map((city) => (
                            <option key={city.name} value={city.name}>{city.name}</option>
                        ))}
                    </select>
                )}

                <select name="reason" value={formData.reason} onChange={handleChange} required>
                    <option value="">Reason for Contact</option>
                    <option value="general_inquiry">General Inquiry</option>
                    <option value="investment_info">Investment Info</option>
                    <option value="about_erda">About ERDA</option>
                    <option value="about_delta_state">About Delta State</option>
                </select>
                <textarea name="message" rows="10" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
