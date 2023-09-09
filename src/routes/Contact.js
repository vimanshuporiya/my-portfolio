import React from 'react'
import Header from '../components/Header';

import Footersec from '../components/Footersec';
import Midsec2 from '../components/Midsec2';
import  Form  from '../components/Form';
function Contact() {
  return (
    <div>
      <Header />
      <Midsec2  heading="CONTACT" text="Let's Have a Chat
       "/>
       <Form /> 
      <Footersec />
    </div>
  )
}

export default Contact
