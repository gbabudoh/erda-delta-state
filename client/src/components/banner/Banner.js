import React, { useState } from 'react';
import './Banner.css';

//import slide images
import slide1Image from '../../assets/images/slide-images/slide1.jpg'
import slide2Image from '../../assets/images/slide-images/slide2.jpg'

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        
        { title: <p>Delta State Office<br/>Of External Relations & Diaspora Affairs</p>, text: 
        <p className='banner-p1'>ERDA connects Delta State to global markets, fostering business collaboration, investment opportunities, and cultural exchange. Join us now!</p>, imageUrl: slide1Image },
        
        { title: <p>The Gateway<br/>To Delta State Trade & Investment</p>, text: 
        <p className='banner-p2'>Explore business and investment opportunities in Nigeria's Delta State through ERDA, your gateway to a thriving economic landscape</p>, imageUrl: slide2Image },
        // Add more slides as needed
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="banner-container">
            <div className="banner">
                <div className="slide" style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div className="slide-content" key={index}>
                            <div className="text">
                                <h1 className='h1-slide-title'>{slide.title}</h1>
                                <p className='p-slide-text'>{slide.text}</p>
                            </div>
                            <div className="image">
                                <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="controls" style={{ background: 'gainsboro' }}>
                <span onClick={prevSlide}>&lt;</span>
                <span onClick={nextSlide}>&gt;</span>
            </div>
        </div>
    );
};

export default Banner;
