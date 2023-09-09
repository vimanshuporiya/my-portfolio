import React from "react";
import "./MidSec.css";
import MidImg from "../assets/img2.jpg";
import { Link } from "react-router-dom";

function MidSec() {
  return (
    <div className="midsec">
      <div className="mid">
        <img className="mid-img" src={MidImg} alt="Midimage" />
      </div>
      <div className="mid-content">
        <p> Hii, I'M A FrontEnd Developer</p>
        <h1>React Developer</h1>
    <div >
      <Link to="/Project" className="btn"> Projects</Link>
      
      <Link to="/Contact" className=" btn"> Contacts</Link>
    </div>
      </div>
    </div>
  );
}

export default MidSec;
