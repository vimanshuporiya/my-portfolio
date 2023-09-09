import React from 'react'
import Header from '../components/Header';
import MidSec from '../components/MidSec';
import Footersec from '../components/Footersec';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';
function Home() {
  return (
    <div>
      <Header />
      <MidSec />
      <Work/>
      <PricingCard/>
      <Footersec />

    </div>
  )
}

export default Home
