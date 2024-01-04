import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import GovernorOffice from './pages/governor-office/GovernorOffice'
import ExternalRelations from './pages/external-relations/ExternalRelations'
import DiasporaAffairs from './pages/diaspora-affairs/DiasporaAffairs'
import InvestmentOpportunities from './pages/investment-opportunities/InvestmentOpportunities'
import EventsTraining from './pages/events-training/EventsTraining'
import ContactErda from './pages/contact-erda/ContactErda'
import Footer from './components/footer/Footer'
import IdCardRegistration from './pages/IdCard/IdCardRegistration'
import ContactBanner from './pages/contact-erda/ContactBanner'
import CookieBanner from './components/cookie-banner/CookieBanner'



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/governors-office" element={<GovernorOffice/>}/>
        <Route path="/external-relations" element={<ExternalRelations/>}/>
        <Route path="/diaspora-affairs" element={<DiasporaAffairs/>}/> 
        <Route path="/investment-opportunities" element={<InvestmentOpportunities/>}/> 
        <Route path="/events-training" element={<EventsTraining/>}/> 
        <Route path="/contact-erda" element={<ContactErda/>}/> 
        <Route path="/id-card-registration" element={<IdCardRegistration/>}/>    
        <Route path="/id-card-registration" element={<ContactBanner/>}/>    
      </Routes>
      <Footer/>
      <CookieBanner/>
    </div>
  )
}

export default App
