import React from 'react'
import Header from '../components/Header';
import Midsec2 from '../components/Midsec2';
import Footersec from '../components/Footersec';
import AboutContent from '../components/AboutContent';
function About() {
  return (
    <div>
      <Header />
      <Midsec2  heading="I Am a Friendly Front-End Developer" text="
       "/>
       <AboutContent/>
      <Footersec />
    </div>
  )
}

export default About
