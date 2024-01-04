import React, { useState } from 'react';
import './EventTraining.css';

//import training images
import trainImage1 from '../../assets/images/training/carbon-credit-training.jpg'
import trainImage2 from '../../assets/images/training/ai-health-training.jpg'

//import event images
import eventImage1 from '../../assets/images/event-images/rural-entrepeerneur.jpg'




const EventTraining = () => {
  const [activeTab, setActiveTab] = useState('TRAINING');
  const [showModal, setShowModal] = useState(false);

  const handleBookingClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="event-training">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'TRAINING' ? 'active' : ''}`}
          onClick={() => setActiveTab('TRAINING')}
        >
          TRAINING
        </div>
        <div
          className={`tab ${activeTab === 'EVENTS' ? 'active' : ''}`}
          onClick={() => setActiveTab('EVENTS')}
        >
          EVENTS
        </div>
      </div>

      <div className="content">
        {activeTab === 'TRAINING' ? (
          <TrainingGrid onBookClick={handleBookingClick} />
        ) : (
          <EventsGrid onBookClick={handleBookingClick} />
        )}
      </div>

      {showModal && (
        <Modal closeModal={closeModal}>
          <BookingForm closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};



const TrainingGrid = ({ onBookClick }) => {
  const trainings = [
    { id: 1, title: 'Carbon Credit Insights to Guide Sustainable Future', description: 'Dive into the science, economics, and policy of carbon credits. Equip yourself to build a thriving, green future for Africa.', date: 'TBC (coming soon)', duration: 'TBC (not set)', imageUrl: trainImage1 },

    { id: 1, title: 'Title: Leveraging AI for Good Living in Delta State: A Training Program for Sustainable Development', description: 'Building the capacity of individuals and communities in Delta State, Nigeria, to utilize AI tools and technologies for improving their living standards and promoting sustainable development.', date: 'TBC (coming soon)', duration: 'TBC (not set)', imageUrl: trainImage2 },
    // Add more trainings with imageUrl
  ];

  return (
    <div className="grid">
      {trainings.map(training => (
        <div key={training.id} className="te-grid-item">
          <img src={training.imageUrl} alt={training.title} />
          <h3>{training.title}</h3>
          <p>{training.description}</p>
          <p>{training.date}</p>
          <p>{training.duration}</p>
          <button onClick={onBookClick}>Book Training</button>
        </div>
      ))}
    </div>
  );
};

const EventsGrid = ({ onBookClick }) => {
  const events = [
	{ id: 1, title: 'Entrepreneurship Event Rural Regions Delta States', description: 'This Event will explore possibilities on helping rural settlers start small scale businesses.', date: 'TBC (coming soon)', duration: 'TBC (not set)', imageUrl: eventImage1 },
    // Add more events with imageUrl
  ];

  return (
    <div className="grid">
      {events.map(event => (
        <div key={event.id} className="te-grid-item">
          <img src={event.imageUrl} alt={event.title} />
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>{event.date}</p>
          <p>{event.duration}</p>
          <button onClick={onBookClick}>Book to Attend Event</button>
        </div>
      ))}
    </div>
  );
};

const Modal = ({ children, closeModal }) => (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={closeModal}>&times;</span>
      {children}
    </div>
  </div>
);

const BookingForm = ({ closeModal }) => (
  <form>
    <h2>Book Now</h2>
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <input type="tel" placeholder="Mobile Telephone" />
    <button type="submit">Submit</button>
    <button type="button" onClick={closeModal}>Cancel</button>
  </form>
);

export default EventTraining;
