import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul>
    
       
       <Link to="/home"> <li>Home</li> </Link>
       <Link to="/explore"> <li>Explore</li> </Link>
        <Link to="/about"><li>About Us</li></Link>
        <Link to="/book"><li>Book Now</li></Link>
      </ul>
    </div>
  )
}
