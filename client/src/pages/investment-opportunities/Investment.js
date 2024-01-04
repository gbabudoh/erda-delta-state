import React from 'react';
import './Investment.css'; // Importing the CSS file


//import investment images
import investImage1 from '../../assets/images/investment/agribusiness.jpg'
import investImage2 from '../../assets/images/investment/light-manufacturing.jpg'
import investImage3 from '../../assets/images/investment/healthcare.jpg'
import investImage4 from '../../assets/images/investment/tourism.jpg'
import investImage5 from '../../assets/images/investment/real-estate.jpg'
import investImage6 from '../../assets/images/investment/energy.jpg'
import investImage7 from '../../assets/images/investment/mining.jpg'
import investImage8 from '../../assets/images/investment/oil-gas.jpg'



const Investment = () => {
    return (
        <div className="investment-container">
            <h1>Delta State Offers Great Invetment Opportunities</h1>
            <p className='invest-p'>
			Delta State, Nigeria: Your Strategic Gateway to African Growth. Diversify your portfolio with Delta's rich tapestry of investment opportunities. Cultivate fertile farmlands for agribusiness abundance. Manufacture the future with light industry's nimble potential. Build and heal with healthcare infrastructure's enduring demand. Untap tourism's hidden gems and craft real estate empires in a burgeoning market. Harness renewable energy's infinite promise and unlock the bounty of mineral reserves. Delta isn't just "Make in Africa," it's "Profit in Delta." Invest now and reap the rewards of Africa's rising powerhouse.
			</p><br/><br/>
            <div className="investment-grid-container">
                {/* Repeat this block for each investment opportunity */}
                <div className="investment-grid-item">
                    <img src={investImage1} alt="Investment Title" />
                    <div className="investment-info-box">
                        <h3>Agribusiness</h3>
                        <p>Delta State boasts fertile land, abundant water resources, and a favorable climate, making it ideal for various agricultural ventures.</p>
                        <p><h5>Contact ERDA for more details via Email or phone</h5></p>
                        <p><a href="mailto:investment@deltastate-erda.com">investment@deltastate-erda.com</a></p>
                        <p>Phone: +31 634351598</p>
                    </div>
                </div>

                <div className="investment-grid-item">
                    <img src={investImage2} alt="Investment Title" />
                    <div className="investment-info-box">
                        <h3>Light Manufacturing</h3>
                        <p>The state's growing population and developing infrastructure create demand for locally produced goods in Delta state.</p>
                        <p><h5>Contact ERDA for more details via Email or phone</h5></p>
                        <p><a href="mailto:investment@deltastate-erda.com">investment@deltastate-erda.com</a></p>
                        <p>Phone: +31 634351598</p>
                    </div>
                </div>

                <div className="investment-grid-item">
                    <img src={investImage3} alt="Investment Title" />
                    <div className="investment-info-box">
                        <h3>Healthcare</h3>
                        <p>With a growing population and increasing demand for quality healthcare, investment opportunities is in demand.</p>
                        <p><h5>Contact ERDA for more details via Email or phone</h5></p>
                        <p><a href="mailto:investment@deltastate-erda.com">investment@deltastate-erda.com</a></p>
                        <p>Phone: +31 634351598</p>
                    </div>
                </div>

                <div className="investment-grid-item">
                    <img src={investImage4} alt="Investment Title" />
                    <div className="investment-info-box">
                        <h3>Tourism</h3>
                        <p>Delta State's scenic landscapes, rich cultural heritage, and diverse wildlife offer immense tourism potential investment opportunities.</p>
                        <p><h5>Contact ERDA for more details via Email or phone</h5></p>
                        <p><a href="mailto:investment@deltastate-erda.com">investment@deltastate-erda.com</a></p>
                        <p>Phone: +31 634351598</p>
                    </div>
                </div>

                <div className="investment-grid-item">
                    <img src={investImage5} alt="Investment Title" />
                    <div className="investment-info-box">
                        <h3>Real Estate</h3>
                        <p>Delta State's scenic landscapes, rich cultural heritage, and diverse wildlife offer immense tourism potential investment opportunities.</p>
                        <p><h5>Contact ERDA for more details via Email or phone</h5></p>
                        <p><a href="mailto:investment@deltastate-erda.com">investment@deltastate-erda.com</a></p>
                        <p>Phone: +31 634351598</p>
                    </div>
                </div>

                <div className="investment-grid-item">
                    <img src={investImage6} alt="Investment Title" />
                    <div className="investment-info-box">
					<h3>Energy</h3>
                        <p>Investing in renewable energy projects like solar power can address the state's energy needs and contribute to sustainability.</p>
                        <p><h5>Contact ERDA for more details via Email or phone</h5></p>
                        <p><a href="mailto:investment@deltastate-erda.com">investment@deltastate-erda.com</a></p>
                        <p>Phone: +31 634351598</p>
                    </div>
                </div>

                <div className="investment-grid-item">
                    <img src={investImage7} alt="Investment Title" />
                    <div className="investment-info-box">
                        <h3>Mining</h3>
						<p>Delta State has mineral resources like kaolin and limestone, offering potential for exploration and responsible mining activities.</p>
                        <p><h5>Contact ERDA for more details via Email or phone</h5></p>
                        <p><a href="mailto:investment@deltastate-erda.com">investment@deltastate-erda.com</a></p>
                        <p>Phone: +31 634351598</p>
                    </div>
                </div>

                <div className="investment-grid-item">
                    <img src={investImage8} alt="Investment Title" />
                    <div className="investment-info-box">
                        <h3>Oil and Gas</h3>
						<p>Delta State sits within the prolific Niger Delta basin, holding oil and gas discoveries. There are huge opportunities.</p>
                        <p><h5>Contact ERDA for more details via Email or phone</h5></p>
                        <p><a href="mailto:investment@deltastate-erda.com">investment@deltastate-erda.com</a></p>
                        <p>Phone: +31 634351598</p>
                    </div>
                </div>
                
                {/* End of block */}
                {/* Repeat the block as needed for each investment opportunity */}
            </div>
        </div>
    );
};

export default Investment;
