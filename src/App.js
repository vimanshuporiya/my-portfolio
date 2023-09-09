import React from 'react'
import './App.css';
 import Education from './routes/Education.js';
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact.js';
import { Route, Routes} from 'react-router-dom';


function App() {
  return (
     <>
       
     <Routes>
      <Route path="/" element=
      {<Home/>}/>
      <Route path="/Education" element=
      {<Education/>}/>
      <Route path="/Project" element=
      {<Project/>}/>
      <Route path="/About" element=
      {<About/>}/>
      <Route path="/Contact" element=
      {<Contact/>}/>
     </Routes>
     </>
    
  );
}

export default App;
