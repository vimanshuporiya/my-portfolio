import React from 'react'
import Header from '../components/Header';
import Footersec from '../components/Footersec';
import Midsec2 from '../components/Midsec2';
import EducationSection from '../components/EducationSection';
function Education() {
  return (
    <div>
      <Header />
      <Midsec2  heading="EDUCATION" text="ALL my Education paths 
       "/>
       <EducationSection/>
      <Footersec />  
    </div>
  )
}

export default Education
