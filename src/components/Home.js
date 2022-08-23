import React from 'react'
import image from "../images/Logo.png"

export default function Home() {
  return (
    <div >
     <img src={image} alt="FooterImage" className="image"/>
     <h1 className="headerHeading">Welcome to Litchies!</h1>
    </div>
  )
}
