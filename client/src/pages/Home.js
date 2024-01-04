import React from 'react'
import Banner from '../components/banner/Banner'
import SmallBanner from '../components/Small-banner/SmallBanner'
import FrontPageDisplay from './front-page-display/FrontPageDisplay'


function Home() {
  return (
	<div>
	  <Banner/>	 
	  <SmallBanner/> 
	  <FrontPageDisplay/>
	</div>
  )
}

export default Home
