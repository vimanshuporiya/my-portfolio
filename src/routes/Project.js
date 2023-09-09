import React from 'react'
import Header from '../components/Header';

import Footersec from '../components/Footersec';
import Midsec2 from '../components/Midsec2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';
function Project() {
  return (
    <div>
      <Header />
      <Midsec2  heading=" PROJECTS" text="Some of my 
      most recent Projects "/>
      <Work/>
      <PricingCard/>
      <Footersec />
    </div>
  )
}

export default Project
