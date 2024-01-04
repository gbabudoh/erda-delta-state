// src/ExternalRelations.js
import React from 'react';
import './ExternalRelations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

//banner image
import bannerImage from '../../assets/images/banner/b1.jpg'

// Head of diaspora image
import sunnyImage from '../../assets/images/sunny/sunny.jpg';

// Importing images for grid columns
import gridImage1 from '../../assets/images/grid-images/grid-image1.jpg';
import gridImage2 from '../../assets/images/grid-images/grid-image2.jpg';
import gridImage3 from '../../assets/images/grid-images/grid-image3.jpg';
import gridImage4 from '../../assets/images/grid-images/grid-image4.jpg';
import gridImage5 from '../../assets/images/grid-images/grid-image5.jpg';
import gridImage6 from '../../assets/images/grid-images/grid-image6.jpg';
import gridImage7 from '../../assets/images/grid-images/grid-image7.jpg';
import gridImage8 from '../../assets/images/grid-images/grid-image8.jpg';
// Import additional images for the grid and gallery here if necessary

//import images for gallery
import galleryImage1 from '../../assets/images/gallery/comrade-olu-of-warri.jpg'
import galleryImage2 from '../../assets/images/gallery/health-conference.jpg'
import galleryImage3 from '../../assets/images/gallery/political-engagement.jpg'
import galleryImage4 from '../../assets/images/gallery/global-water-eco-forum.jpg'



const ExternalRelations = () => {
  return (
    <div className="external-relations">
      {/* Image Banner */}
      <div className="image-banner">
        <img src={bannerImage} alt="Banner" />
      </div>

      {/* Information Column */}
      <div className="information-column">
		<div className='external-div-1'>EXTERNAL RELATIONS ||</div>
        <p className='external-p'>The Special Assistant to the Delta State Governor for External Relations and Diaspora Affairs plays a key role in engaging with investors and foreign entities to foster bilateral trade and attract charitable contributions. By establishing and maintaining relationships with international investors, they help to bring in foreign capital, which is vital for the state's economic growth. Their efforts in promoting bilateral trade agreements open new markets for local products and facilitate the entry of foreign goods, benefiting the state's economy. Additionally, the Assistant actively liaises with international charities and non-profit organizations, securing aid and support for various developmental projects in Delta State. This holistic approach in engaging with external stakeholders significantly contributes to the state's socioeconomic advancement and global integration.</p>
      </div>

      {/* Grid Columns */}
      <div className="grid-columns">
        {/* Repeat this structure for each grid item */}
        
		<div className="grid-item">
          <div className="grid-image">
            <img src={gridImage1} alt="Description for image1" />
          </div>
          <div className="grid-content">
            <h3>Foreign Investment Options</h3>
            <p>Experts from Europe in Asaba to discuss foreign investment opportunities.</p>
          </div>
        </div>
        
		<div className="grid-item">
          <div className="grid-image">
            <img src={gridImage2} alt="Description for image1" />
          </div>
          <div className="grid-content">
            <h3>Insight To Foreign Direct Investment</h3>
            <p>Discussion with EU investors for FDI collaboration with Delta state government.</p>
          </div>
        </div>
        
		<div className="grid-item">
          <div className="grid-image">
            <img src={gridImage3} alt="Description for image1" />
          </div>
          <div className="grid-content">
            <h3>With Former Nigerian President</h3>
            <p>Discussing foreign policy with former President of Nigeria, Olusegun Obasanjo.</p>
          </div>
        </div>
        
		<div className="grid-item">
          <div className="grid-image">
            <img src={gridImage4} alt="Description for image1" />
          </div>
          <div className="grid-content">
            <h3>Foreign Experts From The EU</h3>
            <p>Brining in foreign expert to Delta state for economic development partnerships.</p>
          </div>
        </div>
        
		<div className="grid-item">
          <div className="grid-image">
            <img src={gridImage5} alt="Description for image1" />
          </div>
          <div className="grid-content">
            <h3>Flood Management Solution</h3>
            <p>Delegation of flood management experts from the Netherlands.</p>
          </div>
        </div>
        
		<div className="grid-item">
          <div className="grid-image">
            <img src={gridImage6} alt="Description for image1" />
          </div>
          <div className="grid-content">
            <h3>Foreign Investment Meeting</h3>
            <p>The executive assistant to Delta state governor, meeting with foreign investors.</p>
          </div>
        </div>
        
		<div className="grid-item">
          <div className="grid-image">
            <img src={gridImage7} alt="Description for image1" />
          </div>
          <div className="grid-content">
            <h3>With Olu of Warri in Brussels</h3>
            <p> in Brussels, to discuss issues of mutual collaboration between the EU Warri Kingdom.</p>
          </div>
        </div>
       
	    <div className="grid-item">
          <div className="grid-image">
            <img src={gridImage8} alt="Description for image1" />
          </div>          
		  <div className="grid-content">
            <h3>With Former Governor, Delta State</h3>
            <p>To discuss and explore foreign investment for youth development programmes.</p>
          </div>
        </div>
        {/* Add more grid items here */}
      </div>

      {/* Profile and Video Section */}
      <div className="profile-video-section">
        <div className="profile-section">
          <div className="profile-image">
            <img src={sunnyImage} alt="Dr. Sunny Ohefe" />
          </div>
          <h2>Comrade Dr. Sunny Ofehe</h2>
          <p>Executive Assistant to the Delta State Governor<br/>External Relations & Diaspora Affairs</p>
          {/* Social Media Icons */}
          <div className="social-media-icons">
            <a href="https://www.facebook.com/SunnyOfehe/about" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/sunnyofehe" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/sunnyofehe/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/sunnyofehe/?igshid=NzZlODBkYWE4Ng%3D%3D" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            {/* Add more icons as needed */}
          </div>
        </div>
        <div className="video-section">
          <iframe
            title="YouTube Video"
            src="https://www.youtube.com/embed/esdKmsy8oWw?si=VcGGlzBYpqgmgIbX"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Gallery Title */}
      <h1 className="gallery-title">GALLERY</h1>

      {/* Photo Gallery */}
      <div className="photo-gallery">
        {/* Repeat this structure for each gallery item */}
        
        <div className="gallery-item">        
          <div className="gallery-image"></div>
          <img src={galleryImage1} alt="Description for image1" />
            <div className="gallery-content">             
            <h3>With Olu of Warri EU Summit</h3>
            <p>EU investment summit in Brussels</p>
          </div>
        </div>

        <div className="gallery-item">
          <div className="gallery-image"></div>
          <img src={galleryImage2} alt="Description for image1" />
          <div className="gallery-content">
            <h3>Health International conference</h3>
            <p>International health conference in Dubai</p>
          </div>
        </div>
        
        <div className="gallery-item">
          <div className="gallery-image"></div>
          <img src={galleryImage3} alt="Description for image1" />
          <div className="gallery-content">
            <h3>Political Engagement EU</h3>
            <p>With first vice President, EU Commission</p>
          </div>
        </div>
        <div className="gallery-item">
          <div className="gallery-image"></div>
          <img src={galleryImage4} alt="Description for image1" />
          <div className="gallery-content">
            <h3>Inter Eco Forum</h3>
            <p>Speaking at the Inter Eco Forum on "Global Water Sustainability</p>
          </div>
        </div>    

        
        

        {/* Add more gallery items here */}
      </div>
    </div>
  );
}

export default ExternalRelations;
