import React from 'react';
import './FrontPageDisplay.css';
import circleImage from '../../assets/images/front-page/trade.jpg'; 
import circleImage2 from '../../assets/images/front-page/diaspora.jpg';
import circleImage3 from '../../assets/images/front-page/culture.jpg';
import circleImage4 from '../../assets/images/front-page/ngo.jpg';
import circleImage5 from '../../assets/images/front-page/crises.jpg';
import circleImage6 from '../../assets/images/front-page/policy.jpg';
import circleImage7 from '../../assets/images/front-page/diplomatic.jpg';



const FrontPageDisplay = () => {
    return (
        <div className="container">
            <div className="grid-column left">
                <div className="rotating-circle">
                <img src={circleImage} alt="Rotating" className="rotating-image"/> 
                {/* Using the imported image */}
                </div>
            </div>
            
            <div className="grid-column right">
                <h3>Trade and Investment Facilitation</h3>
                <p>ERDA is aiding Delta state government in attracting trade and investments by leveraging its extensive network of connections and resources.</p>
            </div>
            <div className="grid-column left">
                <div className="rotating-circle">
                    <img src={circleImage2} alt="Rotating" className="rotating-image"/> {/* Using the imported image */}
                </div>
            </div>
            
            <div className="grid-column right">
                <h3>Diaspora Engagement</h3>
                <p>ERDA is bridging Delta state government with the right diaspora networks to enhance human capital and foster knowledge exchange for the state's development.</p>
            </div>
            <div className="grid-column left">
                <div className="rotating-circle">
                    <img src={circleImage3} alt="Rotating" className="rotating-image"/> {/* Using the imported image */}
                </div>
            </div>

            <div className="grid-column right">
                <h3>Cultural Exchange and Promotion</h3>
                <p>ERDA, on behalf of Delta state government, utilises its media-driven capabilities and global network to showcase Delta state's rich culture, aiming to boost tourism and cultural awareness.</p>
            </div>

            <div className="grid-column left">
                <div className="rotating-circle">
                    <img src={circleImage4} alt="Rotating" className="rotating-image"/> {/* Using the imported image */}
                </div>
            </div>
            <div className="grid-column right">
                <h3>Collaboration with Non-Governmental Organizations (NGOs)</h3>
                <p>ERDA, representing Delta state government, has established partnerships with reputable NGOs to advance relief programs and provide support for humanitarian and socio-economic issues.</p>
            </div>

            <div className="grid-column left">
                <div className="rotating-circle">
                    <img src={circleImage5} alt="Rotating" className="rotating-image"/> {/* Using the imported image */}
                </div>
            </div>
            <div className="grid-column right">
                <h3>Crisis Management and Support</h3>
                <p>ERDA, on behalf of the Delta state government, has established strategic partnerships and channels to effectively address crises like hunger, natural disasters, political unrest, and insecurity.</p>
            </div>

            <div className="grid-column left">
                <div className="rotating-circle">
                    <img src={circleImage6} alt="Rotating" className="rotating-image"/> {/* Using the imported image */}
                </div>
            </div>
            <div className="grid-column right">
                <h3>Policy Formulation and Advice</h3>
                <p>ERDA is providing strategic advisory and support for policy formation and governance, addressing both local and international matters, to align with global trends and standards.</p>
            </div>

            <div className="grid-column left">
                <div className="rotating-circle">                    
                    <img src={circleImage7} alt="Rotating" className="rotating-image"/> {/* Using the imported image */}
                </div>
            </div>
            <div className="grid-column right">
                <h3>Diplomatic Relations</h3>
                <p>ERDA is fostering diplomatic relations with nations and agencies for Delta state's interests, including coordinating visits, meetings, and international cooperation agreements.</p>
            </div>

        </div>
    );
};

export default FrontPageDisplay;
