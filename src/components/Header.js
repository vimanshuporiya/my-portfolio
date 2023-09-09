import React, { useState } from 'react'
import "./Header.css"
import { Link } from "react-router-dom";
import {FaBars, FaTimes,  FaAward} from "react-icons/fa"
function Header() {
  const[ click,setClick]=useState(false);
  const handleClick = () => setClick(!click)
  return (
    <div className='Header'>
          
                  <h1   className='logo'>
                    <FaAward size={26}/>      Vimanshu
                  </h1>
                  <ul className={click ? "menu active" :"menu"}>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/Education">Education</Link>
                    </li>
                    <li>
                      <Link to="/Project">Project</Link>
                    </li>
                    <li>
                      <Link to="/About">About</Link>
                    </li>
                    <li>
                      <Link to="/Contact">Contact</Link>
                    </li>
                    
                 
                  </ul>
                 
              <div className='hamburger'  onClick={handleClick}>
              {click?(
              <FaTimes size={20} style={{color:'white'}
              }/>):(
      <FaBars size={20} style={{color:'white'}
              }/>
              )}
              </div>  
         
    </div>
  )
}

export default Header
