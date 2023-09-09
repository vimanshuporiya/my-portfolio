import "./Midsec2.css"
import React from 'react'

function Midsec2(props) {
  return (
    <div className="Midsec2">
    <div className="heading">
      <h1> {props.heading}</h1>
      <p> {props.text}</p>
    </div>      
    </div>
  )
}

export default Midsec2
