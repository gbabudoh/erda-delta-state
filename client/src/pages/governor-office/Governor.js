import React from 'react';
import './Governor.css'; // Importing the CSS file
import {Helmet} from "react-helmet";


//import image for grid
import gridImage1 from '../../assets/images/governor/enugu-road-project.jpg'
import gridImage2 from '../../assets/images/governor/owa-market.jpg'
import gridImage3 from '../../assets/images/governor/sports.jpg'
import gridImage4 from '../../assets/images/governor/education.jpg'
import gridImage5 from '../../assets/images/governor/budget.jpg'
import gridImage6 from '../../assets/images/governor/contract-signing.jpg'
import gridImage7 from '../../assets/images/governor/nnpc-partner.jpg'
import gridImage8 from '../../assets/images/governor/creatives.jpg'


//import images from gallery
import galleryImage1 from '../../assets/images/governor/social-support.jpg'
import galleryImage2 from '../../assets/images/governor/social-care.jpg'
import galleryImage3 from '../../assets/images/governor/ugheli-asaba-project.jpg'
import galleryImage4 from '../../assets/images/governor/religious-engagement.jpg'


const Governor = () => {
  // Dummy data for images and descriptions

      <Helmet>
      <meta charSet="utf-8" />
        <title>Governor</title>
        <meta name="description" content="Governor's Office" />
        <link rel="canonical" href="https://www.deltastate-erda.com/governors-office"/>
      </Helmet>

  const gridImages = [

    { title: "Road Project", description: "Governor inspecting 12.3 Kilometre Ute-Okpu/ Ute-Enugu Road in Ika North -East Local Government Area", src: gridImage1 },

    { title: "Infrastructure", description: "Boji-Boji Owa Mix Modern Market and the School of Engineering and Environmental Sciences at the University of Delta", src: gridImage2 },
    
    { title: "Youths & Sports", description: "At the Opening Ceremony of the 7th Edition of the National Youths Games, driving sports development", src: gridImage3 },

    { title: "Education", description: "inaugurated a 500-seater Auditorium, two 250-seater Auditoriums, and completed the construction and furnishing of the Faculty of Agriculture, Dennis Osadebay University", src: gridImage4 },

    { title: "2024 Fiscal Budget", description: "Presented the Budget Proposals of N714.4 billion for the 2024 Fiscal Year to the hallowed House. It is the first budget proposal by this administration.", src: gridImage5 },

    { title: "Contract Signing", description: "Presided over the contract signing ceremony between the Delta State Government and Julius Berger Nigeria Plc in Government House, for the construction of three Flyover Bridges", src: gridImage6 },

    { title: "NNPC Partnership", description: "Agreement between UTM Offshore limited, NNPC limited and Delta State Government at the NNPC Towers Abuja", src: gridImage7 },

    { title: "Support Creatives", description: "The governor welcomes music artist Davido to the goverment house,supportive towards creatives.", src: gridImage8 },
    // ... Add remaining images for the grid
  ];

  const galleryImages = [
    { title: "Interstate Engagement", description: "Social support to Akwa Ibom state", src: galleryImage1 },

    { title: "Humanitarian Visit Bayelsa", description: "Bayelsa State Football Supporters Club accident victims", src: galleryImage2 },

    { title: "Dualization Project", description: "The inspection of the Ughelli Asaba Dualization Project", src: galleryImage3 },

    { title: "Religious Engagement", description: "Thanksgiving celebration at Winners' Chapel, Ibusa Road, Asaba", src: galleryImage4 },

    // ... Add more images for the gallery
  ];

  return (
    <div className="governor-page">

      <div className="governors-message">
        <h1 className='governor-h1'>Governor's Message</h1>
        <p className='governor-p'>
        <h3>Dear People of Delta State,</h3><br/>

        As your devoted Governor, Rt. Hon. Sheriff Francis Orohwedor Oborevwori, I stand before you today with a steadfast commitment to usher in an era of transformative growth and prosperity for our beloved state. Recognizing the vibrant spirit and potential of Delta State, my vision is to cultivate a thriving economy, elevate living standards, and unlock new horizons of opportunity for each of you.

        Our journey towards economic revitalization will be marked by robust initiatives to stimulate job creation, ensuring that every willing hand finds meaningful work. We will foster a secure environment where peace and justice prevail, allowing our communities to flourish unimpeded.

        In our quest for a sustainable future, I pledge to prioritize a greener environment, enhancing our natural beauty while safeguarding it for generations to come. Education and healthcare stand as pillars of my agenda; I am committed to enhancing the quality and accessibility of both, recognizing that a healthy, educated populace is the backbone of a progressive society.

        Moreover, we will actively engage with our diaspora community, harnessing their diverse skills and expertise. This global network of Delta State sons and daughters will be a wellspring of innovative ideas and opportunities, helping to bring international insights to our local challenges.

        Together, let us embark on this journey of transformation, building a Delta State that glows with promise and prosperity for all. 
        <br/>
        <br/>

        Yours in service,
        <br/>

        <h3>Rt. Hon. Sheriff Francis Orohwedor Oborevwori</h3>
        (Governor)
        </p>
      </div>

      <div className="governor-section-title">
        <h1>Governor's Project Engagements</h1>
      </div>
      <div className="governor-image-grid">
        {gridImages.map((img, index) => (
          <div className="image-column" key={`grid-${index}`}>
            <img src={img.src} alt={img.title} />
            <div className="overlay">
              <h1>{img.title}</h1>
              <p>{img.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="section-title">
        <h1 className='governor-gal-h1'>Governor's Gallery</h1>
      </div>
      <div className="gallery">
        {galleryImages.map((img, index) => (
          <div className="gallery-item" key={`gallery-${index}`}>
            <img src={img.src} alt={img.title} />
            <div className="gallery-text">
              <h2>{img.title}</h2>
              <p>{img.description}</p>
            </div>
          </div>
        ))}
      </div>
        </div> 
  );
}; 

export default Governor;
