import React from "react";
import "./Footersec.css";
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
const Footersec = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              <FaHome
                size={20}
                style={{ color: "blue", marginRight: "2rem" }}
              />
              476/22a  Gurugram INDIA
            </h4>
          </div>
          <br></br>
          <div className="Phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "blue", marginRight: "2rem" }}
              />
              +91-8059227400
            </h4>
          </div>
          <br></br>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "blue", marginRight: "2rem" }}
              />
              Vimanshuporiya123@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About ME </h4>
          <p>
         " I am  Vimanshu. I Enjoy 
          Desighing and Code with 
          React Projects and Solving 
          problems related to coding."
           </p>
          <div className="Social">
            <FaFacebook size={30} style={{color:"blue" , marginRight:"1rem"}} />
            <FaTwitter  size={30} style={{color:"blue" , marginRight:"1rem"}} />
            <FaInstagram  size={30} style={{color:"blue" , marginRight:"1rem"}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footersec;
