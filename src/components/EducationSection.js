// EducationSection.js
import React from 'react';
import './EducationSection.css'; // Import the external CSS file

const educationData = [
  // ... your education data
];

const EducationSection = () => {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-list">
      
          <div className="education-item" >
            <h3>degree</h3>
            <p className="school">schoolName</p>
            <p className="field">fieldOfStudy</p>
            <p className="dates">startDate - endDate</p>
          </div>
        
      </div>
    </section>
  );
};

export default EducationSection;
