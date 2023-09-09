import React from 'react'
import "./AboutContent.css"
import { Link } from "react-router-dom";
 
import Img1 from "../assets/img3.jpg";
function AboutContent() {
  return (
    <div className='about'>
    <div className='left'>
     <h1>Hii' I AM Vimanshu</h1>
    <p> I'm a react Frontend  Developer.I created responsive secure Websites for my clients  </p>
    <Link to="/contact">
        <button className='btn'> Contact</button>
    </Link>
    
    </div>
    <div className='right'>
         <div className='image-container'> 
        
            <img src={Img1} className='img' alt="true" />
      
        
        
    </div>
      </div>
    </div>
  )
}

export default AboutContent
