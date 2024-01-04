import React from 'react';
import './Diaspora.css'; // Import the CSS file
import {Helmet} from "react-helmet";


// Import banner image
import bannerImage from '../../assets/images/banner/b2.jpg';

// Import grid images
import diasImage1 from '../../assets/images/diaspora/diaspora-paris.jpg';
import diasImage2 from '../../assets/images/diaspora/diaspora-men-paris.jpg';
import diasImage3 from '../../assets/images/diaspora/diaspora-belgium.jpg';
import diasImage4 from '../../assets/images/diaspora/diaspora-netherlands.jpg';
import diasImage5 from '../../assets/images/diaspora/diaspora-germany.jpg';
import diasImage6 from '../../assets/images/diaspora/diaspora-olu-of-warri.jpg';
import diasImage7 from '../../assets/images/diaspora/diaspora-uk.jpg';
import diasImage8 from '../../assets/images/diaspora/diaspora-usa.jpg';


const Diaspora = () => {
    return (       

        <div>
            
            <Helmet>
                <meta charSet="utf-8" />
                <title>Diaspora</title>
                <meta name="description" content="Delta state Diaspora" />
                <link rel="canonical" href="https://www.deltastate-erda.com/diaspora-affairs" />
            </Helmet>


            {/* Image Banner */}
            <div className="diaspora-image-banner">
                <img src={bannerImage} alt="Diaspora" className="diaspora-image"/>
            </div>

            {/* Page Title and Description */}
            <div className="page-content">
                <h1>The Diaspora Engagement</h1>
                <p className='diaspora-p'>
                Delta State's diaspora, its people living abroad, can be a powerful bridge to progress, offering financial support through remittances that fuel development and education. Their expertise, from healthcare to tech, can be shared through mentorship and collaboration, boosting innovation and productivity. As cultural ambassadors, they build bridges of understanding, enriching both Delta State and their host countries.
                Their voices carry weight on the international stage, advocating for Delta State's needs and attracting foreign investment. But engagement is a two-way street. Delta State must welcome its diaspora, simplifying processes and seeking their input. By working together, they can unlock a shared journey of prosperity.
                </p>
            </div>

            {/* Diaspora Activities */}
            <div className="activities">
                <h1 className='diaspora-h1' style={{fontSize: '30px'}}>Diaspora Activities</h1>
                <div className="diaspora-grid">
                    {/* Grid Item 1 */}
                    <div className="diaspora-grid-item">
                        <img src={diasImage1} alt="Activity 1" className="diaspora-grid-image"/>
                        <div className="overlay">
                            <h2>Dispora France - Women</h2>
                            <p>Women diaspora in Paris from Delta state</p>
                        </div>
                    </div>

                    {/* Grid Item 2 */}
                    <div className="diaspora-grid-item">
                        <img src={diasImage2} alt="Activity 2" className="diaspora-grid-image"/>
                        <div className="overlay">
                            <h2>Diaspora France - Men</h2>
                            <p>Women diaspora in Paris from Delta state</p>
                        </div>
                    </div>

                    {/* Grid Item 3 */}
                    <div className="diaspora-grid-item">
                        <img src={diasImage3} alt="Activity 3" className="diaspora-grid-image"/>
                        <div className="overlay">
                            <h2>Dispora - Belgium</h2>
                            <p>Meeting with Deltan Diaspora in Belgium</p>
                        </div>
                    </div>

                    {/* Grid Item 4 */}
                    <div className="diaspora-grid-item">
                        <img src={diasImage4} alt="Activity 4" className="diaspora-grid-image"/>
                        <div className="overlay">
                            <h2>Diaspora - Netherlands</h2>
                            <p>The Netherlands Diaspora</p>
                        </div>
                    </div>

                    {/* Grid Item 5 */}
                    <div className="diaspora-grid-item">
                        <img src={diasImage5} alt="Activity 5" className="diaspora-grid-image"/>
                        <div className="overlay">
                            <h2>Diaspora - Germany</h2>
                            <p>Meeting with Diaspora in Germany</p>
                        </div>
                    </div>

                    {/* Grid Item 6 */}
                    <div className="diaspora-grid-item">
                        <img src={diasImage6} alt="Activity 6" className="diaspora-grid-image"/>
                        <div className="overlay">
                            <h2>Olu of Warri Visit - Diaspora</h2>
                            <p>Olu of Warri visits Netherlands Diaspora</p>
                        </div>
                    </div>

                    {/* Grid Item 7 */}
                    <div className="diaspora-grid-item">
                        <img src={diasImage7} alt="Activity 7" className="diaspora-grid-image"/>
                        <div className="overlay">
                            <h2>Diaspora - United Kingdom</h2>
                            <p>The United Kingdom Diaspora Protest</p>
                        </div>
                    </div>

                    {/* Grid Item 8 */}
                    <div className="diaspora-grid-item">
                        <img src={diasImage8} alt="Activity 8" className="diaspora-grid-image"/>
                        <div className="overlay">
                            <h2>Diaspora - United State (USA)</h2>
                            <p>The United States Diaspora - Event</p>
                        </div>
                    </div>                  

                </div>
            </div>
        </div>
    );
}

export default Diaspora;
